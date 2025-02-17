import React from "react";
import BackButton from "@/shared/ui/BackButton";
import ExitButton from "@/shared/ui/ExitButton";

const SubHeader: React.FC = () => {
  return (
    <div className="bg-white fixed top-0 w-full flex justify-between p-3 z-10">
      {/* 뒤로 가기 버튼 */}
      <BackButton size="medium" />

      {/* 홈으로 가기 버튼 */}
      <ExitButton size="medium" />
    </div>
  );
};

export default SubHeader;
