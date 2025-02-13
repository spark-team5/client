import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-md backdrop-blur-md px-6 py-3 flex items-center justify-between w-full max-w-4xl mx-auto rounded-lg">
      {/* 중앙 - 로고 */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black tracking-wide drop-shadow-md">
        forRest
      </h1>

      {/* 오른쪽 - 캘린더 아이콘 (테두리 제거) */}
      <button className="btn btn-ghost border-none hover:bg-gray-200 transition rounded-full p-2">
        <FaCalendarAlt className="text-black w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
      </button>
    </div>
  );
};

export default Header;
