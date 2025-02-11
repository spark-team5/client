import { useState, useRef } from "react";

export function useAudioRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorder = useRef<MediaRecorder | null>(null);
  const audioChunks = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorder.current = new MediaRecorder(stream);
    mediaRecorder.current.ondataavailable = (event) => {
      audioChunks.current.push(event.data);
    };
    mediaRecorder.current.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    return new Promise<string>((resolve) => {
      mediaRecorder.current?.stop();
      mediaRecorder.current?.addEventListener("stop", () => {
        const audioBlob = new Blob(audioChunks.current, { type: "audio/wav" });
        resolve(URL.createObjectURL(audioBlob));
      });
      setIsRecording(false);
    });
  };

  return { isRecording, startRecording, stopRecording };
}
