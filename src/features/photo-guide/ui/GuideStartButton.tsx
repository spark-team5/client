import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/BaseButton";

export const GuideStartButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-10 w-full flex justify-center">

      <Button text="시작하기" size="large" onClick={() => navigate("/face-capture")} />
    </div>
  );
};

export default GuideStartButton;
