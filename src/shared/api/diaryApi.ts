import { DiaryEntry } from "@/entities/diary";

export async function fetchDiaryEntries(): Promise<DiaryEntry[]> {
  return [
    { id: 1, imageSrc: "/img1.jpg", title: "🌅 아침 일기", description: "오늘 아침은 상쾌했어요.", date: "2024-02-10" },
    { id: 2, imageSrc: "/img2.jpg", title: "📖 저녁 일기", description: "오늘 하루도 무사히 마무리합니다.", date: "2024-02-11" },
    { id: 3, imageSrc: "/img3.jpg", title: "☕ 커피 한잔", description: "오랜만에 카페에서 커피 한잔.", date: "2024-02-12" },
  ];
}
