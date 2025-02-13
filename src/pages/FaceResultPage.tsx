import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";
import { useBamboo } from "@/context/BambooContext";

// 죽순이 상태별 이미지 매핑
const bambooImages = {
    sad: "/assets/images/temporaryBamboo.png", angry: "/assets/images/diaryimage.jpg", happy: "/assets/images/diaryimage.jpg", blank: "/assets/images/temporaryBamboo.png", neutral: "/assets/images/temporaryBamboo.png",
  };

const bambooMessages = {
  sad: "오늘 기분이 안 좋으셨군요. 😢 죽순이가 울고 있어요.",
  angry: "조금 화가 나셨나 봐요. 😡 죽순이도 뿔이 났어요!",
  happy: "오늘 기분이 좋으시군요! 😆 죽순이도 행복해 보여요!",
  blank: "뭔가 멍한 하루인가요? 😶 죽순이도 멍한 표정이에요.",
  neutral: "감정이 딱히 없으신가요? 😐 죽순이는 무표정이에요.",
};

const FaceResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { state: bambooState } = useBamboo();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-6">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">오늘의 감정 분석</h1>
      <p className="text-center text-gray-600 text-sm sm:text-base md:text-lg">{bambooMessages[bambooState]}</p>
      <img src={bambooImages[bambooState]} alt="죽순이 상태" className="w-[200px] h-[200px] object-cover mt-4" />
      <div className="mt-6 w-full max-w-xs sm:max-w-md space-y-3"> 
        <Button text="🏠 홈으로 가기" size="medium" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default FaceResultPage;
