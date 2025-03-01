import React from "react";

interface FaceCanvasProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

export const FaceCanvas: React.FC<FaceCanvasProps> = ({ canvasRef }) => {
  return (
    <canvas
      ref={canvasRef}
      className="absolute fixed top-[52px] w-screen h-screen object-cover scale-x-[-1] hidden"
    />
  );
};

export default FaceCanvas;
