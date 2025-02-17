import React from "react";
import diaryEmotionImage from "@/shared/assets/images/diaryimage.jpg";

export const EmotionImage: React.FC = () => {
  return (
    <div className="mt-4 w-24 h-24">
      <img src={diaryEmotionImage} alt="감정 이미지" className="w-full h-full object-contain" />
    </div>
  );
};

export default EmotionImage;
