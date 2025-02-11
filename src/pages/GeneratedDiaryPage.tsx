import React, { useEffect } from "react";
import { useGeneratedDiary } from "@/features/diaryGenerator/model";
import { useDiaryStore } from "@/shared/store/diaryStore";
import { DiaryCard } from "@/shared/ui/DiaryCard";

const GeneratedDiaryPage: React.FC = () => {
  const { diary } = useGeneratedDiary();
  const { diaries, addDiary } = useDiaryStore();  

  useEffect(() => {
    if (!diaries.some((d) => d.id === diary.id)) {
      addDiary(diary);   
    }
  }, [diary, addDiary, diaries]);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">📖 생성된 일기</h1>
      <div className="flex flex-col items-center">
        <DiaryCard {...diary} />
        {diary.audioUrl && (
          <audio controls className="mt-4">
            <source src={diary.audioUrl} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </div>
  );
};

export default GeneratedDiaryPage;
