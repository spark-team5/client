import React from "react";
import { useFaceResult } from "@/features/face-result";
import { EmotionMessage, EmotionImage, FaceResultActions } from "@/features/face-result";

const FaceResultPage: React.FC = () => {
  const { bambooState, bambooMessages, bambooImages } = useFaceResult();

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
