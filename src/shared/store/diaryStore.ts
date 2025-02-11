import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DiaryEntry } from "@/entities/diary";

interface DiaryState {
  diaries: DiaryEntry[];
  addDiary: (diary: DiaryEntry) => void;
}

export const useDiaryStore = create(
  persist<DiaryState>(
    (set) => ({
      diaries: [],   
      addDiary: (diary) =>
        set((state) => ({ diaries: [diary, ...state.diaries] })),
    }),
    { name: "diary-storage" }  
  )
);
