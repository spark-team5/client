// DiaryImageGrid.js
import React from "react";

interface DiaryImageGridProps {
  diaryImages: { id: number; imageUrl: string; date: string; content: string }[];
  onSelectImage: (imageUrl: string) => void;
}

export const DiaryImageGrid: React.FC<DiaryImageGridProps> = ({ diaryImages, onSelectImage }) => {
  return (
    <div className="mt-4 w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-4">
      {diaryImages.map((entry) => (
        <div
          key={entry.id}
          className="w-[157px] h-[236px] p-1.5 bg-[#eaf4ce] rounded-xl border border-black flex flex-col items-center gap-1.5 cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => onSelectImage(entry.imageUrl)}
        >
          {/* 날짜 영역 */}
          <div className="w-[145px] py-1 bg-white rounded-[14px] border border-black flex justify-center items-center">
            <span className="text-center text-[#201f1e] text-base font-normal font-['SD PixelGoodmorning TT'] leading-snug">
              {entry.date}
            </span>
          </div>

          {/* 이미지 영역 */}
          <img className="w-[145px] h-[145px] rounded-2xl border border-black" src={entry.imageUrl} alt={`일기 ${entry.id}`} />

          {/* 내용 영역 */}
          <div className="w-[145px] h-[38px] text-[#201f1e] text-sm font-normal font-['SD PixelGoodmorning TT'] leading-[18.76px] text-center">
            {entry.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiaryImageGrid;