import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface MonthSelectorProps {
  selectedMonth: { year: number; month: number };
  changeMonth: (direction: "prev" | "next") => void;
}

export const MonthSelector: React.FC<MonthSelectorProps> = ({ selectedMonth, changeMonth }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-md mt-15 relative top-[30px]">
      <button 
        className="btn btn-outline btn-sm bg-white   text-gray-700 hover:bg-gray-400" 
        onClick={() => changeMonth("prev")}
      >
        <FaChevronLeft className="w-4 h-4" />
      </button>

      <div className="text-lg sm:text-xl font-bold text-black">
        {selectedMonth.year}년 {selectedMonth.month}월
      </div>

      <button 
        className="btn btn-outline btn-sm bg-white   text-gray-700 hover:bg-gray-400" 
        onClick={() => changeMonth("next")}
      >
        <FaChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default MonthSelector;
