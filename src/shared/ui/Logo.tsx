import React from "react";
import mainLogo from "@/shared/assets/images/logos/mainLogo.png";

const Logo: React.FC = () => {
  return (
    <div className="px-3 py-3 flex items-center justify-center w-full max-w-5xl mx-auto ">
      {/* 중앙 - 로고 이미지 */}
      <img 
        src={mainLogo} 
        alt="forRest Logo" 
        className="h-20 object-contain"
      /> 

    </div>
  );
};

export default Logo;
