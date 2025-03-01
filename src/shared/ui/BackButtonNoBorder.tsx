import React from "react";
import { useNavigate } from "react-router-dom"; 
//import BackButtonImage from "@/shared/assets/images/icons/BackIcon.png"; // 이미지 import

const BackButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate(-1)}
      className="bg-transparent transition transform text-lg"
      style={{ background: "none" }}  
    >
      ←
    </button>
  );
};

export default BackButton;
