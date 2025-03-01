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
import  WelcomePage from "@/pages/WelcomePage";
import { FirstPage } from "@/pages";
import { Providers } from "@/app/providers";
import  EmotionResultPage  from "@/pages/EmotionResultPage";     
export const AppRoutes = () => {
  return (   
    <Providers>  
    <Routes> 
    <Route path="/" element={<FirstPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/welcome" element={<WelcomePage />} /> 
      <Route path="/home" element={<HomePage />} /> 
      <Route path="/face-capture" element={<FaceCapturePage />} />
      <Route path="/photo-guide" element={<PhotoGuidePage />} />
      <Route path="/face-result" element={<FaceResultPage />} />
      <Route path="/emotion-result" element={<EmotionResultPage />} />  
      <Route path="/diary-entry" element={<DiaryEntryPage />} />
      <Route path="/diary-result" element={<DiaryResultPage />} />
      <Route path="/diary-history" element={<DiaryHistoryPage />} />  
    </Routes> 
    </Providers>
  );
};
