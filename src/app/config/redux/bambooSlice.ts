import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import bambooSad from "@/shared/assets/images/Character_160px.svg"; // ✅ import된 이미지
import bambooAngry from "@/shared/assets/images/Character_160px.svg";
import bambooHappy from "@/shared/assets/images/Character_160px.svg";
import bambooBlank from "@/shared/assets/images/Character_160px.svg";
import bambooNeutral from "@/shared/assets/images/Character_160px.svg";
type BambooStateType = "neutral" | "happy" | "sad" | "angry" | "blank";

interface BambooState {
  bambooState: BambooStateType;
  bambooImages: Record<BambooStateType, string>;
  bambooMessages: Record<BambooStateType, string>;
} 
const initialState: BambooState = {
  bambooState: "neutral",
  bambooImages: {
    neutral: bambooSad,
    happy: bambooAngry,
    sad: bambooHappy,
    angry: bambooNeutral,
    blank: bambooBlank,
  },
  bambooMessages: {
    neutral: "아직 숲에 아무도 없어요",
    happy: "죽순이 자라서 기뻐요!",
    sad: "죽순이 힘들어 보여요...",
    angry: "죽순이 화가 났어요!",
    blank: "죽순이는 무표정이에요 😐"
  },
};

const bambooSlice = createSlice({
  name: "bamboo",
  initialState,
  reducers: {
    setBambooState: (state, action: PayloadAction<BambooStateType>) => {
      state.bambooState = action.payload;
    },
  },
});

export const { setBambooState } = bambooSlice.actions;
export default bambooSlice.reducer;
