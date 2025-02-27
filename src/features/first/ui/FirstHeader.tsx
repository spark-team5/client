import React from "react";
import Bamboo from "@/shared/assets/images/Character_160px.svg";
import Logo from "@/shared/ui/Logo";  

const FirstHeader: React.FC = () => {
  return (
    <div className="relative w-screen h-screen">
      {/* 상단 그라데이션 배경 */}
      <div className="absolute top-0 left-0 w-screen h-[180px] bg-gradient-to-b from-[#A2EB4E] to-white"></div>

      {/* 중앙 콘텐츠 */}
      <div className="absolute left-1/2 top-[200px] transform -translate-x-1/2 text-black text-[20px] text-center">
        지친 현대인을 위한<br />사이버 대나무숲
      </div>
      
      {/* 로고 */}
      <div className="absolute left-1/2 top-[250px] transform -translate-x-1/2">
        <Logo />
      </div>

      {/* 캐릭터 이미지 */}
      <div className="absolute left-1/2 top-[330px] transform -translate-x-1/2">
        <img src={Bamboo} alt="Bamboo" />
      </div>
    </div>
  );
};


export default FirstHeader;
