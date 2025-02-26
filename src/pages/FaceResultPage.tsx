import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/providers/store";
import { EmotionMessage, EmotionImage, FaceResultActions } from "@/features/face-result";

const FaceResultPage: React.FC = () => {
  // ✅ Redux에서 상태 가져오기
  const bambooState = useSelector((state: RootState) => state.bamboo.bambooState);
  const bambooMessages = useSelector((state: RootState) => state.bamboo.bambooMessages);
  const bambooImages = useSelector((state: RootState) => state.bamboo.bambooImages);

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen w-screen bg-white">
        <EmotionMessage message={bambooMessages[bambooState]} />
        <EmotionImage imageUrl={bambooImages[bambooState]} />
        <FaceResultActions />
      </div>
      <div className="absolute bottom-0 left-0 right-0 w-full h-1/2 bg-gray-200 z-0"></div>
    </div>
  );
};

export default FaceResultPage;
