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
        className="input input-bordered w-104 text-center"
      />
    </div>
  );
};

export default DateInput;
