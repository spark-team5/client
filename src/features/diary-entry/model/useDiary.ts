import { useState, useRef } from "react";

export const useDiary = () => {
  const [text, setText] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState<string | null>(null);
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
        audioChunksRef.current = [];
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("🎙️ 마이크 접근 오류:", error);
      alert("마이크 접근이 거부되었습니다.");
    }
  };

  /** ⏹️ 녹음 중지 */
  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  return {
    text,
    setText,
    isRecording,
    startRecording,
    stopRecording,
    audioURL,
    setAudioURL,
  };
};
