// DiaryHistoryPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiaryHistory } from "@/features/diary-history";
import ArchiveLogo from "@/shared/ui/ArchiveLogo"; 
import { MonthSelector, DiaryImageGrid, DiaryImagePopup } from "@/features/diary-history";
import Header from "@/shared/ui/MainHeader";

const DiaryHistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { diaryImages, selectedMonth, selectedImage, setSelectedImage, changeMonth } = useDiaryHistory();

  return (
    <div className="flex flex-col items-center min-h-screen">
      {/* 헤더 */} 
      <Header />
      {/* ️ 월별 선택 네비게이션 */}
      <ArchiveLogo />
      <MonthSelector selectedMonth={selectedMonth} changeMonth={changeMonth} />
      {/* 반응형 그리드 (일기 이미지 목록) */}
      <div className="relative top-[19px]">
      <DiaryImageGrid diaryImages={diaryImages} onSelectImage={setSelectedImage} />
      </div>
      {/* ️ 선택한 이미지 팝업 */}
      <DiaryImagePopup selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default DiaryHistoryPage;