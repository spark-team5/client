import React, { createContext, useContext, useReducer, ReactNode } from "react";

// 죽순이 상태 타입 정의
type BambooState = "sad" | "angry" | "happy" | "blank" | "neutral";

// 상태 변경 액션 타입
type BambooAction = { type: "SET_STATE"; payload: BambooState };

// 초기 상태 정의
const initialState: BambooState = "neutral";

// Reducer 함수 정의
const bambooReducer = (state: BambooState, action: BambooAction): BambooState => {
  switch (action.type) {
    case "SET_STATE":
      return action.payload;
    default:
      return state;
  }
};

// Context 생성
const BambooContext = createContext<{ state: BambooState; dispatch: React.Dispatch<BambooAction> } | undefined>(
  undefined
);

// Provider 컴포넌트
export const BambooProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(bambooReducer, initialState);

  return <BambooContext.Provider value={{ state, dispatch }}>{children}</BambooContext.Provider>;
};

// 커스텀 훅 (쉽게 접근하기 위한 함수)
export const useBamboo = () => {
  const context = useContext(BambooContext);
  if (!context) {
    throw new Error("useBamboo must be used within a BambooProvider");
  }
  return context;
};
