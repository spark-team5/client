import React from "react";
import bambooSad from "@/shared/assets/images/Character_160px.svg"; // ✅ import된 이미지
import bambooAngry from "@/shared/assets/images/Character_160px.svg";
import bambooHappy from "@/shared/assets/images/Character_160px.svg";
import bambooBlank from "@/shared/assets/images/Character_160px.svg";
import bambooNeutral from "@/shared/assets/images/Character_160px.svg";

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
    <div className="mt-2 w-24 h-24">
      <img src={bambooImages[state]} alt="죽순이 상태" className="w-full h-full object-contain" />
    </div>
  );
};

export default BambooImage;
