import React from "react"; 
import MenuButton from "@/shared/ui/MenuButton";
 
export const HomeHeader: React.FC = () => { 

  return (
    <div
      className="fixed top-0 left-0 w-full flex items-center justify-end px-2 py-2 pr-4 z-50"
      style={{
        background: "linear-gradient(to bottom, #FFFFFF, #A2EB4E)", // 배경 그라데이션 적용
      }}
    >  <MenuButton />
    </div>
  );
};

export default HomeHeader;
