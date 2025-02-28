import React from "react";
import { useFaceCapture } from "@/features/face-capture";
import { FaceVideo, FaceCanvas, FaceMessage, CaptureButton } from "@/features/face-capture"; 
import SubHeader from "@/shared/ui/SubHeader";
export const FaceCapturePage: React.FC = () => {
  const { videoRef, canvasRef, loading, message, captureAndAnalyze } = useFaceCapture();

  return (
    <div className="relative w-screen h-screen bg-gray-600 flex flex-col items-center justify-center">
      {/* 상단 네비게이션 바 */}
      <SubHeader />

      {/* 비디오 및 캔버스 */}
      <FaceVideo videoRef={videoRef} />
      <FaceCanvas canvasRef={canvasRef} />

      {/* 얼굴 안내 메시지 */}
      <FaceMessage message={message} loading={loading} />

      {/* 캡처 버튼 */}
      <CaptureButton loading={loading} captureAndAnalyze={captureAndAnalyze} />
    </div>
  );
};

export default FaceCapturePage;
