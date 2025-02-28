import React from "react";

interface DiaryTextAreaProps {
  text: string;
  setText: (text: string) => void;
}

export const DiaryTextArea: React.FC<DiaryTextAreaProps> = ({ text, setText }) => {
  return (
    <div className="w-full w-screen max-w-85 card bg-base-100 p-3">
      <textarea
        className="textarea textarea-bordered w-full h-30 text-base p-3 rounded-xl border-[1.4px] border-black"
        placeholder="말 못한 이야기가 있다면, 텍스트로 적어보세요."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

export default DiaryTextArea;
