import React from "react";
import { useNavigate } from "react-router-dom"; 
import MenuIcon from "@/shared/assets/images/icons/MenuIcon.png"; // 이미지 import

const MenuButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/diary-history")}
      className="bg-transparent transition transform  "
      style={{ background: "none" }}  
    >
      <img src={MenuIcon} alt="Back" className="w-8 h-8" />
    </button>
  );
};

export default MenuButton;
