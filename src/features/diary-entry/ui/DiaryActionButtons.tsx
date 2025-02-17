import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/BaseButton";

export const DiaryActionButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 w-full max-w-xs flex flex-col space-y-3">
      <Button text="그림일기 생성하기" size="small" onClick={() => navigate("/diary-result")} /> 
    </div>
  );
};

export default DiaryActionButtons;
