import React from "react";
import BackButtonNoBorder from "@/shared/ui/BackButtonNoBorder"; 

const SubHeader: React.FC = () => {
  return (
    <div className="bg-white fixed top-0 w-full flex justify-between p-3 z-10">
      {/* 뒤로 가기 버튼 */}
      <BackButtonNoBorder />
 
    </div>
  );
};

export default SubHeader;
