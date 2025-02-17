import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDiary, BambooImage, DateInput, RecordingControls, DiaryTextArea, DiaryActionButtons } from "@/features/diary-entry";
import SubHeader from "@/shared/ui/SubHeader";

const DiaryEntryPage: React.FC = () => {
  const navigate = useNavigate();
  const { text, setText, isRecording, startRecording, stopRecording, audioURL, setAudioURL } = useDiary();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  /** 📝 일기 저장 후 결과 페이지로 이동 */
  const handleSaveDiary = () => {
    if (!audioURL) {
      alert("🎙️ 녹음을 먼저 진행해주세요!");
      return;
    }

    navigate("/diary-result", {
      state: { diary: { title: "오늘의 감정 기록", date, content: text.trim() ? text : "(텍스트 없음)", audioURL } },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen bg-white px-6">
      <SubHeader/>
      {/* 날짜 선택 */}
      <DateInput date={date} setDate={setDate} />

      <div className="text-base p-5 text-gray-700">오늘은 무슨 일이 있었나요? 죽순이가 들어줄게요.</div>

      {/* 죽순이 이미지 */}
      <BambooImage />

      {/* 녹음 기능 */}
      <RecordingControls
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        audioURL={audioURL}
        setAudioURL={setAudioURL}
      />

      {/* 텍스트 입력 */}
      <DiaryTextArea text={text} setText={setText} />

      {/* 버튼 */}
      <DiaryActionButtons onSave={handleSaveDiary} />
    </div>
  );
};

export default DiaryEntryPage;
