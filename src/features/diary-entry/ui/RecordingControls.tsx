import React from "react";

interface RecordingControlsProps {
  isRecording: boolean;
  startRecording: () => void;
  stopRecording: () => void;
  audioURL: string | null;
  setAudioURL: (url: string | null) => void;
}

export const RecordingControls: React.FC<RecordingControlsProps> = ({
  isRecording,
  startRecording,
  stopRecording,
  audioURL,
  setAudioURL,
}) => {
  return (
    <div className="w-full max-w-md">
      <div className="card bg-base-100 p-4">
        <div className="flex flex-col items-center">
          {/* 🎙️ 녹음 버튼 (가상 요소로 테두리 강제 적용) */}
          {!audioURL ? (
            <button
              onClick={isRecording ? stopRecording : startRecording}
              className="relative w-40 px-4 py-2 rounded-3xl text-black 
                         bg-gradient-to-b from-white to-[#E3E8DA] 
                         text-lg font-bold overflow-visible before:absolute 
                         before:inset-0  before:rounded-xl before:border-[1.5px] before:border-black"
            >
              {isRecording ? "녹음 중지" : "녹음 시작"}
            </button>
          ) : (
            <button
              onClick={() => {
                alert(audioURL)
                setAudioURL(null);
                startRecording();
              }}
              className="relative w-40 px-4 py-2 rounded-3xl text-black 
                         bg-gradient-to-b from-white to-[#E3E8DA] 
                         text-lg font-bold overflow-visible before:absolute 
                         before:inset-0  before:rounded-xl before:border-[1.5px] before:border-black"
            >
              다시 녹음
            </button>
          )}

          {/* 🎧 녹음된 파일 재생 */}
          {audioURL && (
            <div className="mt-4 flex flex-col items-center">
              <audio controls src={audioURL} className="w-screen max-w-70 h-5 color-white"></audio>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordingControls;
