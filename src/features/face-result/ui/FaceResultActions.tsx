import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/BaseButton";

export const FaceResultActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 w-full max-w-xs sm:max-w-md space-y-3 z-20">
      <Button text="홈으로 가기" size="medium" onClick={() => navigate("/home")} />
    </div>
  );
};

export default FaceResultActions;
