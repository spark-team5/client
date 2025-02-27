import React from "react";
import { useDiaryResult } from "@/features/diary-result";
import { DiaryContainer, EmotionImage, FoodRecommendationModal, DiaryActionButtons } from "@/features/diary-result";
import Header from "@/shared/ui/MainHeader";
const DiaryResultPage: React.FC = () => {
  const {  isModalOpen,   closeModal } = useDiaryResult(); 
  return (
    
    <div className="flex text-black flex-col items-center justify-center w-screen h-screen   bg-[#EEFAEE] px-6 relative">
      <div className="z-30 w-full flex items-center justify-center">
        <Header />
      </div>
      <DiaryContainer  /> 
      <DiaryActionButtons />
      <FoodRecommendationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default DiaryResultPage;
