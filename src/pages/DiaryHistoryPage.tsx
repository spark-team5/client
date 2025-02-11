import React from "react";
import { useDiaryStore } from "@/shared/store/diaryStore";
import { DiaryGrid } from "@/widgets/DiaryGrid";

const DiaryHistoryPage: React.FC = () => {
  const diaries = useDiaryStore((state) => state.diaries);  

  console.log("📌 현재 저장된 일기 목록:", diaries);   

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📜 일기 히스토리</h1>
      <DiaryGrid diaries={diaries} />
    </div>
  );
};

export default DiaryHistoryPage;
