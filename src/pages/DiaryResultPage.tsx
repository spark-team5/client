import React from "react";
import { useDiaryResult } from "@/features/diary-result";
import { DiaryNote, EmotionImage, FoodRecommendationModal, DiaryActionButtons } from "@/features/diary-result";

const DiaryResultPage: React.FC = () => {
  const { diary, isModalOpen, openModal, closeModal } = useDiaryResult();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 relative">
      <DiaryNote diary={diary} openModal={openModal} />
      <EmotionImage />
      <DiaryActionButtons />
      <FoodRecommendationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default DiaryResultPage;
