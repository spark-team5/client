import React from "react";
import diaryEmotionImage from "@/shared/assets/images/diaryimage.jpg";

export const EmotionImage: React.FC = () => {
  return (
    <div className="mt-4 w-screen max-w-80 mb-4 border-[1.5px] rounded-xl border-black overflow-hidden">
      <img src={diaryEmotionImage} alt="생성된 일기 이미지" className="w-full h-full object-contain" />
    </div>
  );
};


export default EmotionImage;
