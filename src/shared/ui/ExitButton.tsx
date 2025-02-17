import React from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { buttonSizeClasses } from "@/shared/lib/sizeClasses"; 
import { ButtonSize } from "@/shared/types/ui";

interface ExitButtonProps {
    size?: ButtonSize;
}

const ExitButton: React.FC<ExitButtonProps> = ({ size = "medium" }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/home")}
      className={`bg-black rounded-full transition hover:bg-gray-700 ${buttonSizeClasses[size] || ""}`}
    >
      <X size={24} className="text-gray-600" />
    </button>
  );
};

export default ExitButton;
