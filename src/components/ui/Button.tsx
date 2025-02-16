import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
  size?: "small" | "medium" | "large";
}

const Button: React.FC<ButtonProps> = ({ text, onClick, className = "", size = "medium" }) => {
  // 크기에 따른 Tailwind 클래스 지정
  const sizeClasses = {
    small: "py-2 px-4 text-sm sm:py-3 sm:px-6 sm:text-base",
    medium: "py-3 px-6 text-lg sm:py-4 sm:px-8 sm:text-xl",
    large: "py-4 px-8 text-xl sm:py-5 sm:px-10 sm:text-2xl",
  };

  return (
    <button
      className={`btn w-full max-w-xs sm:max-w-sm md:max-w-md font-semibold shadow-md rounded-lg 
        !bg-black !text-white hover:!bg-gray-900 active:!bg-gray-800 transition ease-in-out duration-200
        ${sizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
