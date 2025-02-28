import React from "react";

interface DiaryGridLayoutProps {
  children: React.ReactNode;
}

export const DiaryGridLayout: React.FC<DiaryGridLayoutProps> = ({ children }) => {
  return (
    <div className="mt-10 w-full max-w-4xl overflow-y-auto h-[500px] flex justify-center"> 
      {children}
    </div>
  );
};

export default DiaryGridLayout;
