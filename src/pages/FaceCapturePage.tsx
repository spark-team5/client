import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Camera, ArrowLeft, X } from "lucide-react";
import { useBamboo } from "@/context/BambooContext";

const FaceCapturePage: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { dispatch } = useBamboo();
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
      // 현재 프레임을 캡처하여 캔버스에 그리기
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      // 비디오 숨기고 캔버스 보이게 설정
      video.style.display = "none";
      canvas.style.display = "block";

      // 랜덤한 감정 상태 설정
      const emotions = ["sad", "angry", "happy", "blank", "neutral"];
      const bambooState = emotions[Math.floor(Math.random() * emotions.length)];
      dispatch({ type: "SET_STATE", payload: bambooState });

      setTimeout(() => navigate("/face-result"), 2000);
    } catch (error) {
      console.error("🚨 서버 요청 실패:", error);
      alert("서버 오류 발생! 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen bg-gray-600 flex flex-col items-center justify-center">
      {/* 상단 네비게이션 바 */}
      <div className="bg-white absolute top-0 w-full flex justify-between p-4 z-10">
        <button
          onClick={() => navigate(-1)}
          disabled={loading}
          className={`bg-black p-2 rounded-full transition ${loading ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"}`}
        >
          <ArrowLeft size={24} className="text-gray-600" />
        </button>
        <button
          onClick={() => navigate("/home")}
          disabled={loading}
          className={`bg-black p-2 rounded-full transition ${loading ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"}`}
        >
          <X size={24} className="text-gray-600" />
        </button>
      </div>

      {/* 비디오 및 캔버스 */}
      <video ref={videoRef} autoPlay className="absolute w-full h-full object-cover scale-x-[-1]" />
      <canvas ref={canvasRef} className="absolute w-full h-full object-cover scale-x-[-1] hidden" />

      {/* 얼굴 안내 메시지 */}
      <div className="absolute w-80 h-100 border-2 border-white rounded-full flex items-center justify-center">
        <span className={`text-white text-sm ${loading ? "animate-pulse" : ""}`}>{message}</span>
      </div>

      {/* 캡처 버튼 */}
      <div className="absolute bg-white bottom-0 flex justify-center w-full">
        <button 
          className={`bg-black p-4 rounded-full ${loading ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"}`} 
          onClick={captureAndAnalyze} 
          disabled={loading}
        >
          <Camera size={32} className="text-gray-500" />
        </button>
      </div>
    </div>
  );
};

export default FaceCapturePage;
