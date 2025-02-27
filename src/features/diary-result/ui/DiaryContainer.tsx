import React, { useRef, useState } from "react";
import { DateHeader, EmotionImage, DiaryText } from "@/features/diary-result"; 
import Logo from "@/shared/ui/Logo";
import { toPng } from "html-to-image";
import Button from "@/shared/ui/BaseButton"; // ✅ 저장 버튼

export const DiaryContainer: React.FC = () => { 
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [diaryText, setDiaryText] = useState("오늘은 참 기분이 좋았어요!\n하늘도 맑고 기분이 상쾌했어요."); // 예제 텍스트
  const diaryRef = useRef<HTMLDivElement>(null); // ✅ 이미지화할 영역을 참조할 ref 생성

  /** 🖼️ DiaryContainer를 이미지로 저장 */
  const handleSaveImage = () => {
    if (diaryRef.current) {
      toPng(diaryRef.current, { cacheBust: true }) // PNG 변환
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.href = dataUrl;
          link.download = "diary.png"; // 다운로드 파일명
          link.click();
        })
        .catch((err) => {
          console.error("이미지 저장 중 오류 발생:", err);
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div ref={diaryRef} className="flex flex-col items-center w-100 pb-5 bg-[#EEFAEE]">
        <div className="relative z-0 top-10 bottom-10"> 
          <Logo />
        </div> 
        <div className="relative flex flex-col items-center max-w-90 p-6 rounded-xl bg-white border-[1.4px] border-black">
          <DateHeader date={date} />
          <EmotionImage />
          <DiaryText text={diaryText} />
        </div>  
      </div>
      {/* ✅ 버튼을 중앙 정렬 */}
      <div className="flex justify-center w-full h-11 max-w-xs ">
        <Button text="그림일기 저장하기" size="small" onClick={handleSaveImage} />
      </div>
    </div>
  );
};

export default DiaryContainer;
