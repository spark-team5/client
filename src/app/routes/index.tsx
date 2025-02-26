import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import FaceCapturePage from "@/pages/FaceCapturePage";
import  PhotoGuidePage  from "@/pages/PhotoGuidePage";
import  FaceResultPage  from "@/pages/FaceResultPage";
import  DiaryEntryPage  from "@/pages/DiaryEntryPage";
import  DiaryResultPage  from "@/pages/DiaryResultPage";
import  DiaryHistoryPage  from "@/pages/DiaryHistoryPage";
import  LoginPage  from "@/pages/LoginPage";
import { BambooProvider } from "@/app/providers/BambooContext";  
  
export const AppRoutes = () => {
  return ( 
    <BambooProvider> 
    <Routes> 
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/face-capture" element={<FaceCapturePage />} />
      <Route path="/photo-guide" element={<PhotoGuidePage />} />
      <Route path="/face-result" element={<FaceResultPage />} />
      <Route path="/diary-entry" element={<DiaryEntryPage />} />
      <Route path="/diary-result" element={<DiaryResultPage />} />
      <Route path="/diary-history" element={<DiaryHistoryPage />} />  
    </Routes>
    </BambooProvider>
  );
};
