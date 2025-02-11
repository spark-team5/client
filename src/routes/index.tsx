import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import GeneratedDiaryPage from "@/pages/GeneratedDiaryPage";
import DiaryHistoryPage from "@/pages/DiaryHistoryPage";  
import NotFoundPage from "@/pages/NotFoundPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/diary/generated" element={<GeneratedDiaryPage />} />
      <Route path="/diary/history" element={<DiaryHistoryPage />} />     
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
