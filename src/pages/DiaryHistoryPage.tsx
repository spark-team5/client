import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";

// 일기 데이터 타입
interface DiaryEntry {
  id: number;
  date: string;
  emotion: string;
  contentPreview: string;
}

const DiaryHistoryPage: React.FC = () => {
  const navigate = useNavigate();

  // 📝 더미 일기 데이터 (추후 서버에서 불러올 수 있음)
  const [diaryEntries, setDiaryEntries] = useState<DiaryEntry[]>([
    { id: 1, date: "2024-02-01", emotion: "😢 슬픔", contentPreview: "오늘은 조금 힘든 하루였다..." },
    { id: 2, date: "2024-02-03", emotion: "😊 기쁨", contentPreview: "오늘은 정말 좋은 일이 있었다!" },
    { id: 3, date: "2024-02-05", emotion: "😡 화남", contentPreview: "짜증나는 일이 있었지만 잘 해결했다." },
  ]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-6">
      {/* 헤더 */}
      <Header />

      {/* 제목 */}
      <h1 className="text-2xl font-bold mt-6">📖 내 일기 기록</h1>

      {/* 일기 목록 */}
      <div className="mt-4 w-full max-w-md space-y-4">
        {diaryEntries.length > 0 ? (
          diaryEntries.map((entry) => (
            <div
              key={entry.id}
              className="card bg-white shadow-md p-4 rounded-lg cursor-pointer hover:bg-gray-200 transition"
              onClick={() => navigate(`/diary-result/${entry.id}`)}
            >
              <p className="text-sm text-gray-500">{entry.date}</p>
              <p className="font-semibold">{entry.emotion}</p>
              <p className="text-gray-600 truncate">{entry.contentPreview}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">작성된 일기가 없습니다.</p>
        )}
      </div>

      {/* 뒤로 가기 버튼 */}
      <div className="mt-6">
        <Button text="뒤로 가기" size="small" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default DiaryHistoryPage;
