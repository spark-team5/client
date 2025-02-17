import React from "react";
import { FaTimes } from "react-icons/fa";

interface DiaryImagePopupProps {
  selectedImage: string | null;
  onClose: () => void;
}

export const DiaryImagePopup: React.FC<DiaryImagePopupProps> = ({ selectedImage, onClose }) => {
  if (!selectedImage) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
        {/* 닫기 버튼 */}
        <button className="absolute top-2 right-2 text-gray-600 hover:text-black" onClick={onClose}>
          <FaTimes className="w-5 h-5" />
        </button>

        {/* 팝업 이미지 */}
        <img src={selectedImage} alt="선택한 일기 이미지" className="w-full h-auto rounded-lg" />
      </div>
    </div>
  );
};

export default DiaryImagePopup;
