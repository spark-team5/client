import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/BaseButton";

export const DiaryActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-3 w-full max-w-xs flex flex-col space-y-3 h-11"> 
      <Button text="홈으로 이동" size="small" onClick={() => navigate("/home")} />
    </div>
  );
};

export default DiaryActionButtons;
