// useDiaryHistory.js
import { useState } from 'react';

const exampleDiaryImages = [
  {
    id: 1,
    imageUrl: "https://via.placeholder.com/150",
    date: "0월 0일 0요일",
    content: "일기 내용 일기 내용 일...",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/150",
    date: "1월 1일 1요일",
    content: "새해 첫날의 일기...",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/150",
    date: "2월 2일 2요일",
    content: "빼빼로데이",
  },
];

export const useDiaryHistory = () => {
  const [diaryImages, setDiaryImages] = useState(exampleDiaryImages); // 예시 데이터 사용
  const [selectedMonth, setSelectedMonth] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const changeMonth = (direction) => {
    setSelectedMonth((prevMonth) => {
      let newYear = prevMonth.year;
      let newMonth = prevMonth.month;

      if (direction === "prev") {
        newMonth--;
        if (newMonth < 1) {
          newMonth = 12;
          newYear--;
        }
      } else if (direction === "next") {
        newMonth++;
        if (newMonth > 12) {
          newMonth = 1;
          newYear++;
        }
      }

      return { year: newYear, month: newMonth };
    });
  };

  return {
    diaryImages,
    selectedMonth,
    selectedImage,
    setSelectedImage,
    changeMonth,
  };
};