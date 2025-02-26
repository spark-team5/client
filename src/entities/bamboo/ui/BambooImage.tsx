// src/entities/bamboo/ui/BambooImage.tsx
import React from "react";

interface EmotionImageProps {
  imageUrl: string;
}

export const EmotionImage: React.FC<EmotionImageProps> = ({ imageUrl }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img src={imageUrl} alt="Bamboo Emotion" className="w-[160px] h-[160px] object-cover" />
    </div>
  );
};
