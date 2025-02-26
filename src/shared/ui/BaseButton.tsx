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
      className={`btn w-full max-w-xs sm:max-w-sm md:max-w-md font-semibold shadow-md rounded-lg 
        !bg-black !text-white hover:!bg-gray-900 active:!bg-gray-800 transition ease-in-out duration-200
        ${buttonSizeClasses[size]} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
