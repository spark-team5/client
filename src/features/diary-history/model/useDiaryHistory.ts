import { useState } from 'react';

const exampleDiaryImages = [
];

export const useDiaryHistory = () => {
  const [diaryImages, setDiaryImages] = useState(exampleDiaryImages); 
  const [selectedMonth, setSelectedMonth] = useState({ year: new Date().getFullYear(), month: new Date().getMonth() + 1 });
  const [selectedImage, setSelectedImage] = useState(null);

  const changeMonth = async (direction) => {
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

      // 날짜를 API에 전달하여 결과 받기
      const dateParam = `${newYear}-${String(newMonth).padStart(2, '0')}`;

      // 수정된 부분: dateParam을 사용하여 API에 요청을 보냄
      fetch(`https://qbdffmpbayqfbgja.tunnel-pt.elice.io/diary/month?date=${dateParam}`, {
        method: 'GET',  
        credentials: 'include', 
      })
        .then(response => response.json())
        .then(data => {
          if (data.response.result === 'SUCCESS') {
            const diaries = data.response.code.diaries;
            setDiaryImages(diaries.map((diary, index) => ({
              id: index + 1,
              imageUrl: `data:image/jpeg;base64,${diary.summaryImage}`,
              date: new Date(diary.createdAt).toLocaleDateString(),
              content: diary.context,
            })));
          } else {
            console.error("Failed to load diaries data");
          }
        })
        .catch(err => {
          console.error("Error fetching data:", err);
        });

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
