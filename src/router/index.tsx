import React from "react";
import { Routes, Route } from "react-router-dom";
import RecordDiary from "../pages/RecordDiary";
import GeneratedDiary from "../pages/GeneratedDiary";
import DiaryHistory from "../pages/DiaryHistory";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RecordDiary />} />
      <Route path="/generated" element={<GeneratedDiary />} />
      <Route path="/history" element={<DiaryHistory />} />
    </Routes>
  );
};

export default AppRouter;
