import React from "react";
import { DiaryEntry } from "@/entities/diary";
import { DiaryCard } from "@/shared/ui/DiaryCard";

interface DiaryGridProps {
  diaries: DiaryEntry[];
}

export const DiaryGrid: React.FC<DiaryGridProps> = ({ diaries }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4 place-items-center w-full max-w-6xl mx-auto">
      {diaries.length === 0 ? (
        <p className="text-gray-500 text-center col-span-full">아직 저장된 일기가 없습니다.</p>
      ) : (
        diaries.map((diary) => <DiaryCard key={diary.id} {...diary} />)
      )}
    </div>
  );
};
