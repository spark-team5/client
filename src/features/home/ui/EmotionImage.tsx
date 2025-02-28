import React from "react";

interface EmotionImageProps {
  imageUrl: string;
}

export const EmotionImage: React.FC<EmotionImageProps> = ({ imageUrl }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-1/2  h-auto z-20">
      <img
        src={imageUrl}
        alt="죽순이 상태"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default EmotionImage;
