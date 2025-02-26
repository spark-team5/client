import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";

const MessageContainer: React.FC = () => {
  // ✅ Redux에서 bambooState와 bambooMessages 가져오기
  const bambooState = useSelector((state: RootState) => state.bamboo.bambooState);
  const bambooMessages = useSelector((state: RootState) => state.bamboo.bambooMessages);

  return (
    <div className="w-full max-w-[600px] aspect-[7/2] text-sm font-semibold text-black text-center border-[1.5px] border-black rounded-2xl px-4 py-2 bg-white flex items-center justify-center h-full">
      {bambooMessages[bambooState]}
    </div>
  );
};

export default MessageContainer;
