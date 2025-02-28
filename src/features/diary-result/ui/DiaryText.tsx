import React from "react";

interface DiaryTextProps {
  text: string;
}

export const DiaryText: React.FC<DiaryTextProps> = ({ text }) => {
  return (
    <div
      className="w-screen max-w-80 text-base text-center 
                 bg-gradient-to-b bg-white 
                 rounded-xl border-[1.4px] border-black  p-5 
                 whitespace-pre-wrap break-words"
    >
      {text}
    </div>
  );
};

export default DiaryText;
