import React from "react";

interface FaceMessageProps {
  message: string;
  loading: boolean;
}

export const FaceMessage: React.FC<FaceMessageProps> = ({ message, loading }) => {
  return (
    <div className="absolute fixed top-[calc(23%)] w-85 h-100 border-2 border-white rounded-full flex items-center justify-center">
      <span className={`text-white text-sm ${loading ? "animate-pulse" : ""}`}>{message}</span>
    </div>
  );
};

export default FaceMessage;
