import React from "react";
import { useNavigate } from "react-router-dom";

export const GuestLoginButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      className="btn border-gray-400 text-black bg-white hover:bg-gray-200 w-full max-w-xs"
      onClick={() => navigate("/home")}
    >
      로그인 없이 시작하기
    </button>
  );
};

export default GuestLoginButton;
