import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import bambooSad from "@/shared/assets/images/Character_160px.svg"; // ✅ import된 이미지
import bambooAngry from "@/shared/assets/images/Character_160px.svg";
import bambooHappy from "@/shared/assets/images/Character_160px.svg";
import bambooBlank from "@/shared/assets/images/Character_160px.svg";
import bambooNeutral from "@/shared/assets/images/Character_160px.svg";

type EmotionType = "neutral" | "happy" | "sad" | "angry" | "blank";

interface BambooState {
  bambooState: EmotionType;
  bambooImages: Record<EmotionType, string>;
  bambooMessages: Record<EmotionType, string>;
}

const initialState: BambooState = {
  bambooState: "neutral",
  bambooImages: {
    neutral: bambooNeutral,
    happy: bambooHappy,
    sad: bambooSad,
    angry: bambooAngry,
    blank: bambooBlank,
  },
  bambooMessages: {
    neutral: "아직 숲에 아무도 없어요",
    happy: "죽순이 자라서 기뻐요!",
    sad: "죽순이 힘들어 보여요...",
    angry: "죽순이 화가 났어요!",
    blank: "아직 숲에 아무도 없어요",
  },
};

const bambooSlice = createSlice({
  name: "bamboo",
  initialState,
  reducers: {
    setBambooState: (state, action: PayloadAction<EmotionType>) => {
      state.bambooState = action.payload;
    },
  },
});

export const { setBambooState } = bambooSlice.actions;
export default bambooSlice.reducer;
