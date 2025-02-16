import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "@/components/ui/Button";

interface DiaryEntry {
  title: string;
  date: string;
  content: string;
  audioURL?: string;
}

const DiaryResultPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const diary: DiaryEntry | null = location.state?.diary || null;
  
  // 모달 상태 관리
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달 열기
  const openModal = () => setIsModalOpen(true);

  // 모달 닫기
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 relative">
      <h1 className="text-xl font-bold mb-4">📖 오늘의 일기</h1>

      {/* 🌟 노트 배경 + 텍스트 */}
      <div className="relative w-full max-w-md">
        {/* 배경 이미지 (노트) */}
        <img
          src="/assets/images/note.png"
          alt="노트 배경"
          className="w-full h-auto object-cover"
        />

        {/* 📝 텍스트 컨텐츠 (이미지 위에 오버레이) */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start px-6 py-10">
          
          {/* 📌 일기 제목 */}
          <h2 className="text-lg font-semibold text-center">{diary?.title}</h2>

          {/* 🗓️ 일기 날짜 */}
          <p className="text-sm text-gray-500 text-center mt-1">{diary?.date}</p>

          {/* 🖼️ 감정 표현 이미지 */}
          <div className="mt-4 w-24 h-24">
            <img
              src="/assets/images/diaryimage.jpg"
              alt="감정 이미지"
              className="w-full h-full object-contain"
            />
          </div>

          {/* 📝 일기 내용 */}
          <div className="mt-6 text-md text-gray-700 max-w-[80%] text-center leading-relaxed">
            {diary?.content.split("\n").map((line, index) => (
              <div key={index} className="w-full border-b border-gray-500 pb-2">
                <p className="block">{line || "\u00A0"}</p> {/* 빈 줄도 유지 */}
              </div>
            ))}
          </div>

          {/* 🍽️ 오늘의 추천 음식 버튼 */}
          <Button text="오늘의 추천 음식은?" size="small" onClick={openModal} />
        </div>
      </div>

      {/* 🖼️ 버튼 (하단) */}
      <div className="mt-6 w-full max-w-xs flex flex-col space-y-3">
        <Button text="그림일기 저장하기" size="small" onClick={() => navigate("/home")} />
        <Button text="홈으로 이동" size="small" onClick={() => navigate("/home")} />
      </div>

      {/* 🍽️ 모달 창 (음식 추천) */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-gray-500 p-6 rounded-lg shadow-lg w-72 flex flex-col items-center">
            {/* 원형 이미지 */}
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
              <img
                src="/assets/images/temporaryBamboo.png"
                alt="추천 음식"
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* 추천 음식 텍스트 */}
            <p className="mt-4 text-lg text-center text-white font-semibold">
              따끈따끈한 군고구마를 먹어보는 건 어떠세요? 🍠
            </p>

            {/* 추천 음식 이유 */}
            <p className="mt-2 text-sm text-center text-white">
            따뜻한 음식이 마음을 안정시키는 데 도움이 됩니다.
            </p>

            {/* 닫기 버튼 */}
            <div className="mt-4">
              <Button text="닫기" size="small" onClick={closeModal} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiaryResultPage;
