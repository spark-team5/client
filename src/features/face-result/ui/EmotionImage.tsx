import React from "react";

interface EmotionImageProps {
  imageUrl: string;
}

export const EmotionImage: React.FC<EmotionImageProps> = ({ imageUrl }) => {
  return (
    <img 
      src={imageUrl} 
      alt="죽순이 상태" 
      className="w-[200px] h-[200px] object-cover mt-4 z-20" 
    />
  );
};

export default EmotionImage;
