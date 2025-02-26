import { useBamboo } from "@/app/providers/BambooContext";
import bambooSad from "@/shared/assets/images/temporaryBamboo.png";
import bambooAngry from "@/shared/assets/images/diaryimage.jpg";
import bambooHappy from "@/shared/assets/images/diaryimage.jpg";
import bambooBlank from "@/shared/assets/images/temporaryBamboo.png";
import bambooNeutral from "@/shared/assets/images/temporaryBamboo.png";

//  죽순이 상태별 이미지 매핑
const bambooImages: Record<string, string> = {
  sad: bambooSad,
  angry: bambooAngry,
  happy: bambooHappy,
  blank: bambooBlank,
  neutral: bambooNeutral,
};

//  죽순이 상태별 메시지 매핑
const bambooMessages: Record<string, string> = {
  sad: "오늘 기분이 안 좋으셨군요.  죽순이가 울고 있어요.",
  angry: "조금 화가 나셨나 봐요.  죽순이도 뿔이 났어요!",
  happy: "오늘 기분이 좋으시군요!  죽순이도 행복해 보여요!",
  blank: "뭔가 멍한 하루인가요?  죽순이도 멍한 표정이에요.",
  neutral: "감정이 딱히 없으신가요?  죽순이는 무표정이에요.",
};

export const useFaceResult = () => {
  const { state: bambooState } = useBamboo();

  return {
    bambooState,
    bambooMessages,
    bambooImages,
  };
};
