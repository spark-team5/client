import React from "react";

interface EmotionMessageProps {
  message: string;
}

export const EmotionMessage: React.FC<EmotionMessageProps> = ({ message }) => {
  return (
    <p className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-center text-gray-600 text-xs sm:text-sm md:text-base max-w-[280px] whitespace-nowrap z-20">
      {message}
    </p>
  );
};

export default EmotionMessage;
