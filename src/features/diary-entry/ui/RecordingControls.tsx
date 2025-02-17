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
    <div className="mt-6 w-full max-w-md">
      <div className="card bg-base-100 p-4">
        <div className="flex flex-col items-center">
          {isRecording ? (
            <button onClick={stopRecording} className="btn !bg-gray-600 !text-white w-full max-w-xs">
              ⏹️ 녹음 중지
            </button>
          ) : (
            <button onClick={startRecording} className="btn !bg-gray-600 !text-white w-full max-w-xs">
              🎙️ 녹음 시작
            </button>
          )}

          {/* 🎧 녹음된 파일 재생 */}
          {audioURL && (
            <div className="mt-4 flex flex-col items-center">
              <audio controls src={audioURL} className="w-full max-w-xs"></audio>
              <button onClick={() => setAudioURL(null)} className="btn btn-outline btn-sm mt-2">
                🔄 다시 녹음
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecordingControls;
