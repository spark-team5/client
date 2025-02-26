import { useState } from "react";
import noteImage from "@/shared/assets/images/note.png"; // ✅ import된 이미지

export const useDiaryHistory = () => {
  const [selectedMonth, setSelectedMonth] = useState({ year: 2025, month: 2 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  /**  월 변경 함수 */
  const changeMonth = (direction: "prev" | "next") => {
    setSelectedMonth((prev) => {
      let newYear = prev.year;
      let newMonth = direction === "prev" ? prev.month - 1 : prev.month + 1;

      if (newMonth === 0) {
        newMonth = 12;
        newYear -= 1;
      } else if (newMonth === 13) {
        newMonth = 1;
        newYear += 1;
      }

      return { year: newYear, month: newMonth };
    });
  };

  //  임시 이미지 데이터 (월별로 다르게 설정 가능)
  const diaryImages = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    imageUrl: noteImage, //   import된 이미지 사용
  }));

  return {
    selectedMonth,
    selectedImage,
    setSelectedImage,
    changeMonth,
    diaryImages,
  };
};
