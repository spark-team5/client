import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@/components/ui/Button";

interface DiaryEntry {
  title: string;
  date: string;
  content: string;
  audioURL?: string;
}

const DiaryResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const diary: DiaryEntry | null = location.state?.diary || null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-xl font-bold mb-4">📖 오늘의 일기</h1>

      {diary ? (
        <div className="w-full max-w-md card bg-base-100 shadow-xl p-6">
          <h2 className="text-lg font-semibold">{diary.title}</h2>
          <p className="text-sm text-gray-500">{diary.date}</p>
          <p className="text-md text-gray-700 mt-4">{diary.content}</p>

          {/* 녹음된 오디오 파일이 있으면 재생 UI 추가 */}
          {diary.audioURL && (
            <div className="mt-4 flex flex-col items-center">
              <audio controls src={diary.audioURL} className="w-full max-w-xs"></audio>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-600 text-sm">📌 아직 작성된 일기가 없습니다.</p>
      )}

      {/* 하단 버튼 */}
      <div className="mt-6 w-full max-w-xs">
      <Button text="그림일기 저장하기기" size="small" onClick={() => navigate("/")} />
        <Button text="홈으로 이동" size="small" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default DiaryResultPage;
