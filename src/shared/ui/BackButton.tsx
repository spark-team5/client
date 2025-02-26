import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";  
import { buttonSizeClasses } from "@/shared/lib/sizeClasses"; 
import { ButtonSize } from "@/shared/types/ui";

interface BackButtonProps {
    size?: ButtonSize;
}

const BackButton: React.FC<BackButtonProps> = ({ size = "medium" }) => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className={`bg-black rounded-full transition hover:bg-gray-700 ${buttonSizeClasses[size]}`}
    >
      <ArrowLeft size={24} className="text-gray-600" />
    </button>
  );
};

export default BackButton;
