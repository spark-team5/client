import React from "react";
import { GuideMessage, GuideCard, GuideDisclaimer, GuideStartButton } from "@/features/photo-guide";
import Header from "@/shared/ui/MainHeader";

const PhotoGuidePage: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen w-full relative gap-4">
      {/* 뒤로가기 버튼 */}
      <Header />

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
