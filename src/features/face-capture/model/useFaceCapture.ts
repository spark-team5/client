import { useEffect, useRef, useState } from "react";
import { detectEmotion } from "@/shared/api/faceDetection";  
import { useNavigate } from "react-router-dom"; 

export const useFaceCapture = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("원에 얼굴을 맞춰주세요.");

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
      console.error("🚨 웹캠 접근 오류:", err);
      alert("카메라에 접근할 수 없습니다. 브라우저 권한을 확인하세요.");
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

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

      const imageBase64 = canvas.toDataURL("image/png").split(",")[1];
      
      try {
        const result = await detectEmotion(imageBase64);
        console.log("✅ 감정 분석 결과:", result);

        if (result && result.statusMessage) {
          setMessage(result.statusMessage);
        }

        setTimeout(() => navigate("/face-result"), 2000);
      } catch (error) {
        console.error("서버 요청 실패:", error);
        setMessage("서버 오류 발생");
      }
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