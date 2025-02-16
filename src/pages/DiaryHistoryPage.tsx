import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/ui/Header";
import Button from "@/components/ui/Button";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const DiaryHistoryPage: React.FC = () => {
  const navigate = useNavigate();
   
  const [selectedMonth, setSelectedMonth] = useState({ year: 2025, month: 2 });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 📌 월 변경 함수
  const changeMonth = (direction: "prev" | "next") => {
    setSelectedMonth((prev) => {
      let newYear = prev.year;
      let newMonth = direction === "prev" ? prev.month - 1 : prev.month + 1;

      if (newMonth === 0) {
        newMonth = 12;
        newYear -= 1;
      } else if (newMonth === 13) {
        newMonth = 1;
        newYear += 1;
      }

      return { year: newYear, month: newMonth };
    });
  };

  // 📝 임시 이미지 데이터 (월별로 다르게 설정 가능)
  const diaryImages = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    imageUrl: "/assets/images/note.png",
  }));

  return (
    <div className="flex flex-col items-center min-h-screen bg-white px-6">
      {/* 헤더 */}
      <Header />

      {/* 🗓️ 월별 선택 네비게이션 */}
      <div className="flex items-center justify-between w-full max-w-md mt-6">
        <button 
          className="btn btn-outline btn-sm"
          onClick={() => changeMonth("prev")}
        >
          <FaChevronLeft className="w-4 h-4" />
        </button>

        <div className="text-lg sm:text-xl font-bold">
          {selectedMonth.year}년 {selectedMonth.month}월
        </div>

        <button 
          className="btn btn-outline btn-sm"
          onClick={() => changeMonth("next")}
        >
          <FaChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 📌 반응형 그리드 (일기 이미지 목록) */}
      <div className="mt-4 w-full max-w-4xl grid grid-cols-2 md:grid-cols-3 gap-4">
        {diaryImages.map((entry) => (
          <div
            key={entry.id}
            className="relative cursor-pointer transition-transform transform hover:scale-105"
            onClick={() => setSelectedImage(entry.imageUrl)} // 이미지 클릭 시 팝업 열기
          >
            <img
              src={entry.imageUrl}
              alt={`일기 ${entry.id}`}
              className="w-full h-auto rounded-lg  "
            />
          </div>
        ))}
      </div>

      {/* 🖼️ 선택한 이미지 팝업 */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-md w-full">
            {/* 닫기 버튼 */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes className="w-5 h-5" />
            </button>

            {/* 팝업 이미지 */}
            <img
              src={selectedImage}
              alt="선택한 일기 이미지"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}

      {/* 🔙 뒤로 가기 버튼 */}
      <div className="mt-6">
        <Button text="뒤로 가기" size="small" onClick={() => navigate("/home")} />
      </div>
    </div>
  );
};

export default DiaryHistoryPage;
