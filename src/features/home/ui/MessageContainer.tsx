import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";

const MessageContainer: React.FC = () => {
  // ✅ Redux에서 bambooState와 bambooMessages 가져오기
  const bambooState = useSelector((state: RootState) => state.bamboo.bambooState);
  const bambooMessages = useSelector((state: RootState) => state.bamboo.bambooMessages);

  return (
    <div className="bg-[#ADDAAF] border-black border-[1.5px] rounded-2xl p-1 overflow-hidden">
    <div className="w-full max-w-[600px] aspect-[7/1.4] text-sm font-semibold text-black text-center   rounded-2xl px-4 py-2 bg-white flex items-center justify-center h-full">
      {bambooMessages[bambooState]}
    </div>
    </div>
  );
};

export default MessageContainer;
