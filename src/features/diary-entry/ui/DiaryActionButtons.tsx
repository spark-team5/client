import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/BaseButton";

interface DiaryActionButtonsProps {
  onSave: () => void;
}

export const DiaryActionButtons: React.FC<DiaryActionButtonsProps> = ({ onSave }) => {
  return (
    <div className="mt-5 w-full flex flex-col items-center justify-center max-w-xs"> 
    <Button text="그림일기 생성하기" size="small" onClick={onSave} />
    
    </div>
  );
};

export default DiaryActionButtons;