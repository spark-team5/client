import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export const GuideHeader: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="btn btn-ghost border-none !bg-transparent absolute top-4 left-4 p-2 rounded-full hover:!bg-transparent scale-105 transition"
      onClick={() => navigate(-1)}
    >
      <FaArrowLeft className="text-gray-600 text-sm sm:text-base" />
    </button>
  );
};

export default GuideHeader;
