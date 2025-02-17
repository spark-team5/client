import React from "react";

interface DiaryImageGridProps {
  diaryImages: { id: number; imageUrl: string }[];
  onSelectImage: (imageUrl: string) => void;
}

export const DiaryImageGrid: React.FC<DiaryImageGridProps> = ({ diaryImages, onSelectImage }) => {
  return (
    <div className="mt-4 w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-4">
      {diaryImages.map((entry) => (
        <div
          key={entry.id}
          className="relative cursor-pointer transition-transform transform hover:scale-105"
          onClick={() => onSelectImage(entry.imageUrl)}
        >
          <img src={entry.imageUrl} alt={`일기 ${entry.id}`} className="w-full h-auto rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default DiaryImageGrid;
