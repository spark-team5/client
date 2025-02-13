import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { useBamboo } from "@/context/BambooContext";

const FaceCapturePage: React.FC = () => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { dispatch } = useBamboo();
  const [loading, setLoading] = useState(false); // 서버 요청 상태 관리

  // 감정 상태 리스트 (서버가 없을 때 사용)
  const emotions: ("sad" | "angry" | "happy" | "blank" | "neutral")[] = ["sad", "angry", "happy", "blank", "neutral"];

  /** 📷 1. 웹캠 시작 */
  useEffect(() => {
    startCamera();
    return () => stopCamera(); // 컴포넌트 언마운트 시 카메라 종료
  }, []);

  // ✅ 웹캠 활성화
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("🚨 웹캠 접근 오류:", err);
      alert("카메라에 접근할 수 없습니다. 브라우저 권한을 확인하세요.");
    }
  };

  // ✅ 웹캠 종료 (메모리 최적화)
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  /** 📷 2. 사진 촬영 & 감정 분석 */
  const captureAndAnalyze = async () => {
    if (!videoRef.current || !canvasRef.current) return;

    setLoading(true); // 로딩 시작
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    }

    // Base64 변환
    const imageData = canvas.toDataURL("image/jpeg");

    try {
      // 🛑 서버 요청 코드 (테스트 중 주석)
      /*
      const response = await fetch("https://your-api.com/analyze", {
        method: "POST",
        body: JSON.stringify({ image: imageData }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();
      const bambooState = data.bambooState as "sad" | "angry" | "happy" | "blank" | "neutral";
      */

      // ✅ 서버가 없을 때 랜덤 감정 상태 반환 (테스트용)
      const bambooState = emotions[Math.floor(Math.random() * emotions.length)];

      // 전역 상태 업데이트
      dispatch({ type: "SET_STATE", payload: bambooState });

      // ✅ 카메라 종료 후 결과 페이지로 이동
      stopCamera();
      navigate("/face-result");
    } catch (error) {
      console.error("🚨 서버 요청 실패:", error);
      alert("서버 오류 발생! 다시 시도해주세요.");
    } finally {
      setLoading(false); // 로딩 상태 해제
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-6">
      {/* 헤더 */}
      <h1 className="text-xl font-bold mb-4">📷 얼굴 촬영</h1>

      {/* 촬영 화면 (DaisyUI `card` 적용) */}
      <div className="card bg-base-100 shadow-xl p-4 w-full max-w-sm sm:max-w-md">
        <div className="card-body flex flex-col items-center">
          {/* 📷 웹캠 화면 (좌우 반전 적용) */}
          <video ref={videoRef} autoPlay className="w-full h-[300px] object-cover scale-x-[-1] border rounded-lg shadow-lg" />

          {/* 🎥 캔버스 (촬영 후 이미지 표시용, 숨김 처리) */}
          <canvas ref={canvasRef} width="400" height="300" className="hidden"></canvas>

          {/* 🎯 얼굴 촬영 버튼 */}
          <Button text="📸 촬영하기" size="medium" onClick={captureAndAnalyze} />
        </div>
      </div>
 
    </div>
  );
};

export default FaceCapturePage;
