import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";  
import { useDispatch } from "react-redux";
import { setBambooState } from "@/app/config/redux/bambooSlice"; // ✅ Redux 액션 추가
import axios from "axios";

export const useFaceCapture = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // ✅ Redux dispatch 사용

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("원에 얼굴을 맞춰주세요.");

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const apiClient = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  useEffect(() => {
    startCamera();
    return () => stopCamera();
  }, []);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user", width: { ideal: 1920 }, height: { ideal: 1080 } },
        audio: false,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("웹캠 접근 오류:", err);
      alert("카메라에 접근할 수 없습니다. 브라우저 권한을 확인하세요.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  /** 얼굴 촬영 및 감정 분석 API 요청 */
  const captureAndAnalyze = async () => {
     
    if (!videoRef.current || !canvasRef.current) return;

    setLoading(true);
    setMessage("분석 중...");
     
    try {
       
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      video.style.display = "none";
      canvas.style.display = "block";

      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const formData = new FormData();
        formData.append("image", blob, "face_capture.png");

        const faceResponse = await apiClient.post("/api/face/detect", formData);
        console.log("얼굴 감지 결과:", faceResponse.data);

        // ✅ 얼굴 좌표 가져오기
        const faceBox = faceResponse.data?.faceBox;
        if (!faceBox || faceBox.length === 0) {
          setMessage("얼굴을 인식하지 못했습니다. 다시 시도하세요.");
          return;
        }

        // ✅ 감정 분석 API 요청
        const emotionResponse = await apiClient.post("/api/emotion/result", { faceBox });
        console.log("감정 분석 결과:", emotionResponse.data);

        const detectedEmotion = emotionResponse.data.emotion.toLowerCase(); // ✅ 감정 상태 변환

        // ✅ Redux에 감정 상태 저장
        dispatch(setBambooState(detectedEmotion));

        // ✅ 2초 후 결과 페이지로 이동
        setTimeout(() => navigate("/face-result"), 2000);
      }, "image/png");
    } finally {
      setLoading(false);
    }
  };

  return {
    videoRef,
    canvasRef,
    loading,
    message,
    captureAndAnalyze,
  };
};