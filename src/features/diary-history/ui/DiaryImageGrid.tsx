import React from "react";

interface DiaryImageGridProps {
  diaryImages: { id: number; imageUrl: string; date: string; content: string }[]; 
  onSelectImage: (imageUrl: string) => void;
}

export const DiaryImageGrid: React.FC<DiaryImageGridProps> = ({ diaryImages, onSelectImage }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
      {diaryImages.length === 0 ? (
        <div className="w-full h-[236px] flex items-center justify-center text-center text-[#201f1e] text-xl font-normal">
          앗, 아직 작성된 일기가 없어요...★
        </div>
      ) : (
        diaryImages.map((entry) => (
          <div
            key={entry.id}
            className="w-[155px] h-[236px] p-1.5 bg-[#FFE3F2] rounded-xl border border-black flex flex-col items-center gap-1.5 cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => onSelectImage(entry.imageUrl)}
          >
            <div className="w-[145px] py-1 bg-white rounded-[14px] border border-black flex justify-center items-center">
              <span className="text-center text-[#201f1e] text-base font-normal">
                {entry.date}
              </span>
            </div>
            <img 
              className="w-[145px] h-[145px] rounded-2xl border border-black" 
              src={`data:image/jpeg;base64,${entry.imageUrl}`} // Base64로 이미지 처리
              alt={`일기 ${entry.id}`} 
            />
            <div className="w-[145px] h-[38px] text-[#201f1e] text-sm font-normal text-center">
              {entry.content}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default DiaryImageGrid;
