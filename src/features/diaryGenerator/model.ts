import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DiaryEntry } from "@/entities/diary";

const DEFAULT_DIARY: DiaryEntry = {
  id: 0,
  imageSrc: "/default-diary.jpg",
  title: "🌟 AI 생성 일기",
  description: "녹음된 내용을 AI가 분석하여 자동 생성한 일기입니다.",
  date: new Date().toISOString().split("T")[0],
};

export function useGeneratedDiary() {
  const location = useLocation();
  const navigate = useNavigate();
  const [diary, setDiary] = useState<DiaryEntry>(DEFAULT_DIARY);

  useEffect(() => {
    // 녹음된 데이터가 있다면, 새로운 일기 생성
    if (location.state?.audioUrl) {
      const newDiary: DiaryEntry = {
        id: Date.now(),
        imageSrc: "/generated-diary.jpg",
        title: "🎙 녹음 기반 AI 일기",
        description: "당신의 목소리로 생성된 특별한 일기입니다.",
        date: new Date().toISOString().split("T")[0],
        audioUrl: location.state.audioUrl, // 오디오 URL 추가
      };
      setDiary(newDiary);
    }
  }, [location.state]);

  return { diary };
}
