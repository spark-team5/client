import React from "react";
import bambooSad from "@/shared/assets/images/temporaryBamboo.png"; // ✅ import된 이미지
import bambooAngry from "@/shared/assets/images/diaryimage.jpg";
import bambooHappy from "@/shared/assets/images/diaryimage.jpg";
import bambooBlank from "@/shared/assets/images/temporaryBamboo.png";
import bambooNeutral from "@/shared/assets/images/temporaryBamboo.png";

const bambooImages: Record<string, string> = {
  sad: bambooSad,
  angry: bambooAngry,
  happy: bambooHappy,
  blank: bambooBlank,
  neutral: bambooNeutral,
};

interface BambooImageProps {
  state?: "sad" | "angry" | "happy" | "blank" | "neutral";
}

export const BambooImage: React.FC<BambooImageProps> = ({ state = "neutral" }) => {
  return (
    <div className="mt-6 w-24 h-24">
      <img src={bambooImages[state]} alt="죽순이 상태" className="w-full h-full object-contain" />
    </div>
  );
};

export default BambooImage;
