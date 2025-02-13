import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const DiaryEntryPage: React.FC = () => {
  const navigate = useNavigate();
  const [text, setText] = useState(""); // 텍스트 저장
  const [isRecording, setIsRecording] = useState(false); // 녹음 중 여부
  const [audioURL, setAudioURL] = useState<string | null>(null); // 녹음된 오디오 URL
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  /** 🎙️ 녹음 시작 */
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
        audioChunksRef.current = []; // 저장된 청크 초기화
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("🎙️ 마이크 접근 오류:", error);
      alert("마이크 접근이 거부되었습니다. 브라우저 설정을 확인하세요.");
    }
  };

  /** ⏹️ 녹음 중지 */
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  /** 📝 일기 저장 후 결과 페이지로 이동 */
  const handleSaveDiary = () => {
    if (!text.trim()) {
      alert("📌 일기 내용을 입력해주세요!");
      return;
    }

    const diaryEntry = {
      title: "오늘의 감정 기록",
      date: new Date().toISOString().split("T")[0], // YYYY-MM-DD 형식
      content: text,
      audioURL: audioURL,
    };

    navigate("/diary-result", { state: { diary: diaryEntry } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <h1 className="text-xl font-bold mb-4">📖 오늘의 일기</h1>

      {/* 📝 텍스트 입력 */}
      <div className="w-full max-w-md card bg-base-100 shadow-xl p-4">
        <textarea
          className="textarea textarea-bordered w-full h-40 text-lg p-3"
          placeholder="오늘의 감정을 기록해보세요..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      {/* 🎙️ 녹음 기능 */}
      <div className="mt-6 w-full max-w-md">
        <div className="card bg-base-100 shadow-xl p-4">
          <h2 className="text-lg font-semibold text-center mb-2">🎤 음성 녹음</h2>

          <div className="flex flex-col items-center">
            {isRecording ? (
              <button onClick={stopRecording} className="btn btn-error w-full max-w-xs">
                ⏹️ 녹음 중지
              </button>
            ) : (
              <button onClick={startRecording} className="btn btn-primary w-full max-w-xs">
                🎙️ 녹음 시작
              </button>
            )}

            {/* 🎧 녹음된 파일 재생 */}
            {audioURL && (
              <div className="mt-4 flex flex-col items-center">
                <audio controls src={audioURL} className="w-full max-w-xs"></audio>
                <button
                  onClick={() => setAudioURL(null)}
                  className="btn btn-outline btn-sm mt-2"
                >
                  🔄 다시 녹음
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 🔘 버튼들 */}
      <div className="flex flex-col w-full max-w-xs sm:max-w-md space-y-3 mt-6">
        <Button text="일기 생성하기" size="small" onClick={handleSaveDiary} />
        <Button text="뒤로 가기" size="small" onClick={() => navigate("/")} />
      </div>
    </div>
  );
};

export default DiaryEntryPage;
