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
      className={`w-40 px-6 py-3 font-semibold 
        bg-gradient-to-t from-[#A2EB4E] to-[#FFFFFF] text-black rounded-[50px] 
        border border-black outline outline-[1.5px] outline-black
        hover:from-[#B4F160] hover:to-[#FFFFFF] active:from-[#92D944] active:to-[#F0FFF0]
        transition ease-in-out duration-200 relative z-20
        ${buttonSizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {/* 하얀색 테두리 효과 */}
      <span
        className="absolute inset-0 flex items-center justify-center font-semibold"
        style={{
          WebkitTextStroke: "2px white", // 외부 테두리 (흰색)
          WebkitTextFillColor: "black",  // 내부 텍스트 (검정색)
          fontSize: "inherit",
          zIndex: "10", // 검정 텍스트보다 위
        }}
      >
        {text}
      </span>

      {/* 검정색 텍스트 */}
      <span className="relative text-black font-semibold z-20">{text}</span>
    </button>
  );
};

export default Button;
