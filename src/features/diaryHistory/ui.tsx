import React from "react";
import { useDiaryHistory } from "./model";
import { DiaryGrid } from "@/widgets/DiaryGrid";

export const DiaryHistoryList = () => {
  const { diaries } = useDiaryHistory();

  return <DiaryGrid diaries={diaries} />;
};
