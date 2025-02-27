import React from "react";
import { motion } from "framer-motion";
import { BambooImage, RecordingControls } from "@/features/diary-entry";

interface BambooRecordContainerProps {
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  audioURL: string | null;
  setAudioURL: (url: string | null) => void;
}

const BambooRecordContainer: React.FC<BambooRecordContainerProps> = ({
  isRecording,
  startRecording,
  stopRecording,
  audioURL,
  setAudioURL,
}) => {
  return (
    <div className="flex flex-col mt-3 items-center w-screen max-w-80 bg-white rounded-xl shadow-lg overflow-hidden border-[1.4px] border-black">
      {/* 죽순이 이미지 - 클릭 시 녹음 시작 */}
      <motion.div
        className="cursor-pointer"
        animate={isRecording ? { y: [-10, 10, -10] } : { y: 0 }} // ✅ 녹음 중일 때만 둥실둥실
        transition={{
          duration: isRecording ? 1 : 0.5, // ✅ 멈출 때는 부드럽게 정지
          repeat: isRecording ? Infinity : 0, // ✅ 녹음 끝나면 반복 멈춤
          ease: "easeInOut",
        }}
        onClick={startRecording} // ✅ 클릭하면 녹음 시작
      >
        <BambooImage />
      </motion.div>

      {/* 녹음 컨트롤 */}
      <RecordingControls
        isRecording={isRecording}
        startRecording={startRecording}
        stopRecording={stopRecording}
        audioURL={audioURL}
        setAudioURL={setAudioURL}
      />
    </div>
  );
};

export default BambooRecordContainer;
