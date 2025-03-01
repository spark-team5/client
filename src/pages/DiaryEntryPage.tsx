import React from "react";
import { useNavigate } from "react-router-dom";
import { useDiary, DiaryActionButtons } from "@/features/diary-entry";
import Header from "@/shared/ui/MainHeader";
import EntryContainer from "@/features/diary-entry/ui/EntryContainer";

const DiaryEntryPage: React.FC = () => {
  const navigate = useNavigate();
  const { text, audioURL, setAudioURL } = useDiary(); // ✅ setAudioURL 추가


  /** 📝 일기 저장 후 결과 페이지로 이동 */
  const handleSaveDiary = () => {
    if (!audioURL) {
      alert("🎙️ 녹음을 먼저 진행해주세요!");
      return;
    }
    alert(audioURL)
    navigate("/diary-result", {
      state: { diary: { title: "오늘의 감정 기록", content: text.trim() ? text : "(텍스트 없음)", audioURL } },
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen text-black bg-[#EEFAEE] px-6">
      <Header />
      <EntryContainer setAudioURL={setAudioURL} audioURL={audioURL} />
      <DiaryActionButtons onSave={handleSaveDiary} />
    </div>
  );
};

export default DiaryEntryPage;
