import React from "react";
import noteImage from "@/shared/assets/images/note.png";

interface DiaryNoteProps {
  diary: { title: string; date: string; content: string } | null;
  openModal: () => void;
}

export const DiaryNote: React.FC<DiaryNoteProps> = ({ diary, openModal }) => {
  return (
    <div className="relative w-full max-w-md">
      {/* 배경 이미지 (노트) */}
      <img src={noteImage} alt="노트 배경" className="w-full h-auto object-cover" />

      {/* 📝 텍스트 컨텐츠 (이미지 위에 오버레이) */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start px-6 py-10">
        <h2 className="text-lg font-semibold text-center">{diary?.title}</h2>
        <p className="text-sm text-gray-500 text-center mt-1">{diary?.date}</p>

        {/* 📝 일기 내용 */}
        <div className="mt-6 text-md text-gray-700 max-w-[80%] text-center leading-relaxed">
          {diary?.content.split("\n").map((line, index) => (
            <div key={index} className="w-full border-b border-gray-500 pb-2">
              <p className="block">{line || "\u00A0"}</p> {/* 빈 줄 유지 */}
            </div>
          ))}
        </div>

        {/* 🍽️ 오늘의 추천 음식 버튼 */}
        <button className="btn btn-outline btn-sm mt-4" onClick={openModal}>
          오늘의 추천 음식은?
        </button>
      </div>
    </div>
  );
};

export default DiaryNote;
