import React from "react";
import { useNavigate } from "react-router-dom"; 
import BackButtonImage from "@/shared/assets/images/icons/BackIcon.png"; // 이미지 import

 

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="transition transform hover:scale-105 active:scale-95"
    >
      <img src={BackButtonImage} alt="Back" className="w-10 h-10" />
    </button>
  );
};

export default BackButton;
