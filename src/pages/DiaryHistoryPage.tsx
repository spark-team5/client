import React from "react";
import { useNavigate } from "react-router-dom";
 
import { useDiaryHistory } from "@/features/diary-history";
import { MonthSelector, DiaryImageGrid, DiaryImagePopup } from "@/features/diary-history";
import Header from "@/shared/ui/MainHeader";
const DiaryHistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { selectedMonth, selectedImage, setSelectedImage, changeMonth, diaryImages } = useDiaryHistory();

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-6">
      {/* 헤더 */} 
      <div className="z-30 w-full flex items-center justify-center">
        <Header />
      </div> 
      <MonthSelector selectedMonth={selectedMonth} changeMonth={changeMonth} />
 
      <DiaryImageGrid diaryImages={diaryImages} onSelectImage={setSelectedImage} />
 
      <DiaryImagePopup selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default DiaryHistoryPage;
