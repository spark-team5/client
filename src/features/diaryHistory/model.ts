import { useState, useEffect } from "react";
import { DiaryEntry } from "@/entities/diary";
import { fetchDiaryEntries } from "@/shared/api/diaryApi";

export function useDiaryHistory() {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    fetchDiaryEntries().then(setDiaries);
  }, []);

  return { diaries };
}
