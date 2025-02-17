import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/shared/ui/BaseButton";

export const HomeActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-full max-w-xs sm:max-w-md space-y-3 z-30">
      <Button text="오늘 내 감정은?" size="small" onClick={() => navigate("/photo-guide")} />
      <Button text="일기 쓰기" size="small" onClick={() => navigate("/diary-entry")} />
    </div>
  );
};

export default HomeActions;
