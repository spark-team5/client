import React from "react";
import { useHome } from "@/features/home";
import { EmotionMessage, EmotionImage, HomeActions } from "@/features/home";
import Header from "@/shared/ui/MainHeader";

const HomePage: React.FC = () => {
  const { bambooState, bambooMessages, bambooImages } = useHome();

  return (
    <div className="relative flex flex-col w-screen h-screen bg-white px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* 헤더 (정중앙 배치) */}
      <div className="z-30 w-full flex items-center justify-center">
        <Header />
      </div>

      {/* 중앙 텍스트 (죽순이 상태에 따른 메시지 변경) */}
      <EmotionMessage message={bambooMessages[bambooState]} />

      {/* 죽순이 이미지 (죽순이 상태에 따라 변경) */}
      <EmotionImage imageUrl={bambooImages[bambooState]} />

      {/* 하단 배경 */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gray-300 z-0"></div>

      {/* 하단 버튼 */}
      <HomeActions />
    </div>
  );
};

export default HomePage;
