import React from "react";
import Bamboo from "@/shared/assets/images/Character_160px.svg";
import Logo from "@/shared/ui/Logo";  

const FirstHeader: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[200px] flex justify-center items-center text-center">
        <div className="text-black text-[20px] w-[250px]">
          지친 현대인을 위한<br />사이버 대나무숲
        </div>
      </div>
      
      {/* 로고 부분을 새 Logo 컴포넌트로 변경 */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[254px]">
        <Logo />
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 top-[331px] flex justify-center items-center">
        <img src={Bamboo} alt="Bamboo" />
      </div>
    </div>
  );
};

export default FirstHeader;
