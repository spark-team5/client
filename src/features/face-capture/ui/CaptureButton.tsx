import React from "react";
import { Camera } from "lucide-react";

interface CaptureButtonProps {
  loading: boolean;
  captureAndAnalyze: () => void;
}

export const CaptureButton: React.FC<CaptureButtonProps> = ({ loading, captureAndAnalyze }) => {
  return (
    <div className="absolute fixed bg-white top-[calc(89%)] p-5 flex justify-center w-full">
      <button
        className={`bg-black p-4 rounded-full ${loading ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"}`}
        onClick={captureAndAnalyze}
        disabled={loading}
      >
        <Camera size={32} className="text-gray-500" />
      </button>
    </div>
  );
};

export default CaptureButton;
