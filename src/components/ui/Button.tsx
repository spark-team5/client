import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large"; // 크기 옵션 추가
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "", size = "medium" }) => {
  // 크기에 따른 DaisyUI 클래스 지정
  const sizeClasses = {
    small: "btn-sm sm:btn-md md:btn-lg text-sm sm:text-base md:text-lg",
    medium: "btn-md sm:btn-lg md:btn-xl text-base sm:text-lg md:text-xl",
    large: "btn-lg sm:btn-xl md:btn-2xl text-lg sm:text-xl md:text-2xl",
  };

  return (
    <button
      className={`btn btn-neutral w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg font-semibold shadow-md hover:scale-105 active:scale-95 transition ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
