import React from "react";
import kakaoLoginImg from "@/shared/assets/images/WelcomeButton.svg";
import { useNavigate } from "react-router-dom";

export const WelcomeButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home")
  };

  return (
    <button onClick={handleClick} className="w-auto h-auto p-0 border-none">
      <img
        src={kakaoLoginImg}
        style={{ width: '320px', height: '50px' }} // 이미지 크기 변경
      />
    </button>
  );
};

export default WelcomeButton;
