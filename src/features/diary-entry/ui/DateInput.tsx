import React from "react";

interface DateInputProps {
  date: string;
  setDate: (date: string) => void;
}

export const DateInput: React.FC<DateInputProps> = ({ date, setDate }) => {
  return (
    <div className="flex flex-col items-center">
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="input input-bordered  w-screen max-w-80 text-center 
                   bg-gradient-to-b from-white to-[#ffabf4] 
                   rounded-full border-[1.4px] border-black shadow-md p-5"
      />
    </div>
  );
};

export default DateInput;
