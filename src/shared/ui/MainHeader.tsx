import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onCalendarClick?: () => void; // 캘린더 아이콘 클릭 이벤트 (props로 전달 가능)
}


const Header: React.FC<HeaderProps> = ({ onCalendarClick }) => {
  const navigate = useNavigate();

  return (
    <div className="navbar bg-base-100  backdrop-blur-md px-6 py-3 flex items-center justify-between w-full max-w-4xl mx-auto rounded-lg">
      {/* 중앙 - 로고 (클릭 시 홈으로 이동) */}
      <div
        className="potta text-2xl sm:text-xl md:text-3xl font-extrabold text-black tracking-wide  cursor-pointer"
        onClick={() => navigate("/home")} // 클릭 시 홈으로 이동
      >
        forRest
      </div>

      {/* 오른쪽 - 캘린더 아이콘 (테두리 제거 + 클릭 가능) */}
      <button
         className="btn btn-ghost border-none !bg-transparent hover:!bg-transparent transition rounded-full p-2"
        onClick={onCalendarClick ? onCalendarClick : () => navigate("/diary-history")}
       >
        <FaCalendarAlt className="text-black mt-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>



    </div>
  );
};

export default Header;
