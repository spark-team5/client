import React from "react";
import { useAudioRecorder } from "./model";
import { Button } from "@/shared/ui/Button";
import { useNavigate } from "react-router-dom";

export const AudioRecorder = () => {
  const { isRecording, startRecording, stopRecording } = useAudioRecorder();
  const navigate = useNavigate();

  const handleRecording = async () => {
    if (isRecording) {
      const audioUrl = await stopRecording();
      navigate("/diary/generated", { state: { audioUrl } }); // ✅ 녹음된 데이터 전달
    } else {
      startRecording();
    }
  };

  return <Button label={isRecording ? "⏹ 녹음 중지" : "🎙 녹음 시작"} onClick={handleRecording} />;
};
