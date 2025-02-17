import React from "react";

interface DiaryTextAreaProps {
  text: string;
  setText: (text: string) => void;
}

export const DiaryTextArea: React.FC<DiaryTextAreaProps> = ({ text, setText }) => {
  return (
    <div className="w-full max-w-md card bg-base-100 p-4">
      <textarea
        className="textarea textarea-bordered w-full h-40 text-base p-3"
        placeholder="말 못한 이야기가 있다면, 텍스트로 적어보세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default DiaryTextArea;
