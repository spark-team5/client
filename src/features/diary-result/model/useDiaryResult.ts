import { useState } from "react";
import { useLocation } from "react-router-dom";

interface DiaryEntry {
  title: string;
  date: string;
  content: string;
  audioURL?: string;
}

export const useDiaryResult = () => {
  const location = useLocation();
  const diary: DiaryEntry | null = location.state?.diary || null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => setIsModalOpen(false);

  return {
    diary,
    isModalOpen,
    openModal,
    closeModal,
  };
};
