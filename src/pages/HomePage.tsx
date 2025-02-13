import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import Header from "@/components/ui/Header";
import { useBamboo } from "@/context/BambooContext";

// 죽순이 상태별 이미지 매핑
const bambooImages = {
  sad: "/assets/images/temporaryBamboo.png",
  angry: "/assets/images/diaryimage.jpg",
  happy: "/assets/images/diaryimage.jpg",
  blank: "/assets/images/temporaryBamboo.png",
  neutral: "/assets/images/temporaryBamboo.png",
};

// 죽순이 상태별 메시지 매핑
const bambooMessages = {
  sad: "죽순이가 슬퍼하고 있어요 😢",
  angry: "죽순이가 화가 났어요! 😡",
  happy: "죽순이가 행복해 보여요! 😊",
  blank: "죽순이가 멍한 상태예요 😶",
  neutral: "죽순이는 무표정이에요 😐",
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { state: bambooState } = useBamboo(); // 전역 상태에서 죽순이 상태 가져오기

  return (
    <div className="relative flex flex-col w-full h-screen bg-white px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* 헤더 (정중앙 배치) */}
      <div className="z-30 w-full flex items-center justify-center">
        <Header />
      </div>

      {/* 중앙 텍스트 (죽순이 상태에 따른 메시지 변경) */}
      <p className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-center text-gray-600 text-xs sm:text-sm md:text-base max-w-[280px] whitespace-nowrap z-20">
        {bambooMessages[bambooState]}
      </p>

      {/* 죽순이 이미지 (죽순이 상태에 따라 변경) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-3/5 sm:w-1/2 md:w-3/5 h-auto z-20">
        <img
          src={bambooImages[bambooState]}
          alt="죽순이 상태"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 하단 배경 */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gray-300 z-0"></div>

      {/* 하단 버튼 */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center w-full max-w-xs sm:max-w-md space-y-3 z-30">
        <Button text="오늘 내 감정은?" size="small" onClick={() => navigate("/photo-guide")} />
        <Button text="일기 쓰기" size="small" onClick={() => navigate("/diary-entry")} />
      </div>
    </div>
  );
};

export default HomePage;
