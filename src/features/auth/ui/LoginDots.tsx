import React from "react";

interface LoginDotsProps {
  position: number; // 도트 위치
}

const LoginDots: React.FC<LoginDotsProps> = ({ position }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 top-[572px] flex justify-center items-center gap-2">
      <div
        className={`w-2 h-2 rounded-full ${position == 0 ? "bg-[#15470c]" : "bg-[#d9d9d9]"}`}
      ></div>
      <div
        className={`w-2 h-2 rounded-full ${position == 1 ? "bg-[#15470c]" : "bg-[#d9d9d9]"}`}
      ></div>
      <div
        className={`w-2 h-2 rounded-full ${position == 2 ? "bg-[#15470c]" : "bg-[#d9d9d9]"}`}
      ></div>
    </div>
  );
};

export default LoginDots;
