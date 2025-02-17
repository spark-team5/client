import React from "react";

interface EmotionMessageProps {
  message: string;
}

export const EmotionMessage: React.FC<EmotionMessageProps> = ({ message }) => {
  return (
    <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg">
      {message}
    </p>
  );
};

export default EmotionMessage;
