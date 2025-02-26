import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  onCalendarClick?: () => void; // 캘린더 아이콘 클릭 이벤트 (props로 전달 가능)
}

const Header: React.FC<HeaderProps> = ({ onCalendarClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-3  "
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #A2EB4E)", // 배경 그라데이션 적용 
      }}
    >
      {/* 중앙 - 로고 (클릭 시 홈으로 이동) */}
      <div
        className="potta text-2xl sm:text-xl md:text-3xl font-extrabold text-black tracking-wide cursor-pointer"
        onClick={() => navigate("/home")}
      >
        forRest
      </div>

      {/* 오른쪽 - 캘린더 아이콘 */}
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
