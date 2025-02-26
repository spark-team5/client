import React from "react";
import homeLogo from "@/shared/assets/images/logos/homeLogo.png";

const Logo: React.FC = () => {
  return (
    <div className="px-6 py-3 flex items-center justify-center w-full max-w-4xl mx-auto ">
      {/* 중앙 - 로고 이미지 */}
      <img 
        src={homeLogo} 
        alt="home Logo" 
        className="h-10 sm:h-12 md:h-14 object-contain"
      /> 

    </div>
  );
};

export default Logo;
