import { combineReducers } from "@reduxjs/toolkit";
import bambooReducer from "./bambooSlice";

const rootReducer = combineReducers({
  bamboo: bambooReducer,
});

export default rootReducer;
