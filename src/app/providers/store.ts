import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "@/app/config/redux/rootReducer"; 

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
