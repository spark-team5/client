import React from "react";
import { buttonSizeClasses } from "@/shared/lib/sizeClasses";
import { ButtonSize } from "@/shared/types/ui";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: ButtonSize;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "", size = "medium" }) => {
  return (
    <button
      className={`w-full max-w-xs sm:max-w-sm md:max-w-md font-semibold shadow-md rounded-full
        bg-gradient-to-t from-[#A2EB4E] to-[#FFFFFF] text-black 
        border border-black outline outline-[1.5px] outline-black
        hover:from-[#B4F160] hover:to-[#FFFFFF] active:from-[#92D944] active:to-[#F0FFF0]
        transition ease-in-out duration-200 relative px-4 py-2
        ${buttonSizeClasses[size]} ${className}`}
      onClick={onClick}
      style={{maxWidth: "none"}}
    >
      {/* 하얀색 테두리 효과 */}
      <span
        className="absolute inset-0 flex items-center justify-center font-semibold"
        style={{
          WebkitTextStroke: "2px white", // 정확한 외부 테두리
          WebkitTextFillColor: "black",  // 내부 텍스트는 검정색
          fontSize: "inherit",
          zIndex: "10", // 검정색 텍스트보다 위로 배치
        }}
      >
        {text}
      </span>

      {/* 검정색 텍스트 (별개로 유지) */}
      <span className="relative text-black font-semibold z-20">{text}</span>
    </button>
  );
};

export default Button;
