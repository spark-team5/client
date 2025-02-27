import React from "react";

interface DateHeaderProps {
  date: string;
}

export const DateHeader: React.FC<DateHeaderProps> = ({ date }) => {
  // 날짜를 "YYYY년 M월 D일" 형태로 변환하는 함수
  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 필요
    const day = dateObj.getDate();
    return `${year}년 ${month}월 ${day}일`;
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className="flex items-center justify-center text-lg font-semibold 
                   w-screen max-w-80 text-center 
                   bg-gradient-to-b from-white to-[#ffabf4] 
                   rounded-full border-[1.4px]  border-black shadow-md p-2"
      >
        {formatDate(date)}
      </div>
    </div>
  );
};

export default DateHeader;
