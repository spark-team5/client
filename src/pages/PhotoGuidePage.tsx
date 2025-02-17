import React from "react";
import { GuideHeader, GuideMessage, GuideCard, GuideDisclaimer, GuideStartButton } from "@/features/photo-guide";

const PhotoGuidePage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen bg-transparent w-full relative">
      {/* 뒤로가기 버튼 */}
      <GuideHeader />

      {/* 안내 문구 */}
      <GuideMessage />

      {/* 촬영 가이드 카드 */}
      <GuideCard />

      {/* 주의 문구 */}
      <GuideDisclaimer />

      {/* 시작하기 버튼 */}
      <GuideStartButton />
    </div>
  );
};

export default PhotoGuidePage;
