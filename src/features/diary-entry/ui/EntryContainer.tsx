import React, { useState } from "react";
import { useDiary, DateInput, DiaryTextArea } from "@/features/diary-entry";
import BambooRecordContainer from "@/features/diary-entry/ui/BambooRecordContainer";
import Logo from "@/shared/ui/Logo"; // ✅ Logo 컴포넌트 추가


interface EntryContainerProps {
  setAudioURL: (url: string | null) => void;
  audioURL: string | null;
}

const EntryContainer: React.FC<EntryContainerProps> = ({ setAudioURL,audioURL }) => {
  const { text, setText, isRecording, startRecording, stopRecording} = useDiary();
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  return (
    <div className="flex flex-col items-center w-screen    mt-3">
      {/* ✅ Logo를 EntryContainer 바깥쪽(윗부분)에 배치 */}
      <div className="relative z-0 top-10"> 
      <Logo />
      </div> 

      {/* ✅ EntryContainer (Logo 아래에 배치) */}
      <div className="relative flex flex-col items-center max-w-90 p-6 bg-white rounded-xl  border-[1.4px] border-black">
        {/* 날짜 선택 */}
        <DateInput date={date} setDate={setDate} />

        {/* 죽순이 + 녹음 컨트롤 */}
        <BambooRecordContainer
          isRecording={isRecording}
          startRecording={startRecording}
          stopRecording={stopRecording}
          audioURL={audioURL}
          setAudioURL={setAudioURL}
        />

        {/* 텍스트 입력 */}
        <DiaryTextArea text={text} setText={setText} />
      </div>
    </div>
  );
};

export default EntryContainer;
