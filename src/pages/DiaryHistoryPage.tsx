import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiaryHistory } from "@/features/diary-history";
import ArchiveLogo from "@/shared/ui/ArchiveLogo"; 
import { DiaryGridLayout, DiaryImageGrid, MonthSelector, DiaryImagePopup } from "@/features/diary-history";
import Header from "@/shared/ui/MainHeader"; 

const DiaryHistoryPage: React.FC = () => {
  const navigate = useNavigate();
  const { diaryImages, selectedMonth, selectedImage, setSelectedImage, changeMonth } = useDiaryHistory();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      {/* ✅ `justify-center` 추가하여 세로 중앙 정렬 */}
      
      {/* 헤더 */}
      <Header />
      <div className="relative w-full flex items-center justify-center top-25">
        <ArchiveLogo />
      </div>

      {/* 월 선택 컴포넌트 */}
      <MonthSelector selectedMonth={selectedMonth} changeMonth={changeMonth} />

      {/* ✅ DiaryGridLayout을 추가하여 그리드를 감쌈 */}
      <DiaryGridLayout>
        <DiaryImageGrid diaryImages={diaryImages} onSelectImage={setSelectedImage} />
      </DiaryGridLayout>

      {/* 일기 팝업 */}
      <DiaryImagePopup selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />
    </div>
  );
};

export default DiaryHistoryPage;
