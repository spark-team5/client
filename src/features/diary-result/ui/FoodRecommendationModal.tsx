import React from "react";
import foodRecommendationImage from "@/shared/assets/images/temporaryBamboo.png";

interface FoodRecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FoodRecommendationModal: React.FC<FoodRecommendationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-72 flex flex-col items-center">
        <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
          <img src={foodRecommendationImage} alt="추천 음식" className="w-20 h-20 object-contain" />
        </div>

        <p className="mt-4 text-lg text-center text-white font-semibold">따끈따끈한 군고구마를 먹어보는 건 어떠세요? 🍠</p>
        <p className="mt-2 text-sm text-center text-white">따뜻한 음식이 마음을 안정시키는 데 도움이 됩니다.</p>

        <button className="btn btn-outline btn-sm mt-4" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default FoodRecommendationModal;
