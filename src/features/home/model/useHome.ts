import { useBamboo } from "@/app/providers/BambooContext";
import bambooSad from "@/shared/assets/images/temporaryBamboo.png";
import bambooAngry from "@/shared/assets/images/diaryimage.jpg";
import bambooHappy from "@/shared/assets/images/diaryimage.jpg";
import bambooBlank from "@/shared/assets/images/temporaryBamboo.png";
import bambooNeutral from "@/shared/assets/images/temporaryBamboo.png";

// ✅ 죽순이 상태별 이미지 매핑
const bambooImages: Record<string, string> = {
  sad: bambooSad,
  angry: bambooAngry,
  happy: bambooHappy,
  blank: bambooBlank,
  neutral: bambooNeutral,
};

// ✅ 죽순이 상태별 메시지 매핑
const bambooMessages: Record<string, string> = {
  sad: "죽순이가 슬퍼하고 있어요 😢",
  angry: "죽순이가 화가 났어요! 😡",
  happy: "죽순이가 행복해 보여요! 😊",
  blank: "죽순이가 멍한 상태예요 😶",
  neutral: "죽순이는 무표정이에요 😐",
};

export const useHome = () => {
  const { state: bambooState } = useBamboo();

  return {
    bambooState,
    bambooMessages,
    bambooImages,
  };
};
