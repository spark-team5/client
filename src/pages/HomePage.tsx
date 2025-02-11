import React from "react";
import { AudioRecorder } from "@/features/audioRecorder";

const HomePage: React.FC = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🏠 Home Page</h1>
      <p className="text-lg mb-6">녹음 기능을 사용하여 AI 일기를 생성해 보세요.</p>
      <AudioRecorder />
    </div>
  );
};

export default HomePage;
