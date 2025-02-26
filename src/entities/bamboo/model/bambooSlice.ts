// src/entities/bamboo/model/bambooSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BambooState = "sad" | "angry" | "happy" | "blank" | "neutral";

const initialState: BambooState = "neutral";

const bambooSlice = createSlice({
  name: "bamboo",
  initialState,
  reducers: {
    setBambooState: (state, action: PayloadAction<BambooState>) => action.payload,
  },
});

export const { setBambooState } = bambooSlice.actions;
export default bambooSlice.reducer;
