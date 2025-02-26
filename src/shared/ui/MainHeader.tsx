import React from "react"; 
import { useNavigate } from "react-router-dom";
import BackButton from "@/shared/ui/BackButton";
import MenuButton from "@/shared/ui/MenuButton";

interface HeaderProps {
  onCalendarClick?: () => void; // 캘린더 아이콘 클릭 이벤트 (props로 전달 가능)
}

const Header: React.FC<HeaderProps> = ({ onCalendarClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-between px-2 py-2 z-50"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #A2EB4E)", // 배경 그라데이션 적용
      }}
    > 
      <BackButton /> 
      <button
        className="btn btn-ghost border-none !bg-transparent hover:!bg-transparent transition rounded-full "
        onClick={onCalendarClick ? onCalendarClick : () => navigate("/diary-history")}
      >
        <MenuButton />
      </button>
    </div>
  );
};

export default Header;
