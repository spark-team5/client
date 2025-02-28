import React from "react";
import  Archive from "@/shared/assets/images/logos/Archive.svg";


export const ArchiveLogo: React.FC = () => {
  return (
    <div className="px-6 py-3 flex items-center justify-center w-full max-w-4xl mx-auto relative">
      {/* 중앙 - 로고 이미지 */}
      <img 
  src={Archive} 
  alt="Archive Logo" 
  className="w-[197px] h-[76px] object-contain"
/>


    </div>
  );
};

export default ArchiveLogo;
