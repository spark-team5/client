import React from "react";
import { useLocation } from "react-router-dom";
import { Card } from "@/shared/ui/Card";

export const GeneratedDiaryViewer = () => {
  const location = useLocation();
  const audioUrl = location.state?.audioUrl;

  return (
    <Card>
      <h2 className="text-lg font-bold">📝 AI 생성 일기</h2>
      <p>녹음된 내용을 AI가 분석하여 자동 생성한 일기입니다.</p>
      {audioUrl && <audio controls src={audioUrl}></audio>}
    </Card>
  );
};
