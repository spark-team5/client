import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SubHeader from "@/shared/ui/SubHeader";
interface FaceCaptureProps {
  imageUrl: string;
}

export const FaceResultPage: React.FC<FaceCaptureProps> = ({ imageUrl }) => {
   
  const navigate = useNavigate();
  const [message, setMessage] = useState("찰칵");

  /** 감정 분석 요청 */
  const analyzeEmotion = async () => {
    setMessage("분석 중..."); // ✅ 메시지 변경

    try {
      const response = await axios.post("/api/emotion/result");

      if (response.status === 200) {
        console.log("분석 결과:", response.data);
        navigate("/face-result"); // ✅ 성공 시 이동
      } else {
        setMessage("분석 실패. 다시 시도하세요.");
      }
    } catch (error) {
      console.error("감정 분석 요청 실패:", error);
      setMessage("서버 오류 발생");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white px-6">
      {/* 제목 */}
      <SubHeader />
      <h2 className="text-xl font-bold text-black mb-4 font-['SD PixelGoodmorning TT']">
        ☆.｡ {message} ｡.☆✨
      </h2>

      {/* 촬영된 이미지 박스 */}
      <div className="w-[250px] h-[320px] border-[1.2px] border-black rounded-xl p-2 shadow-lg flex items-center justify-center 
                     bg-gradient-to-b from-[#EAF4CE] to-white">
        <img
          src={imageUrl}
          alt="Captured Face"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* 메시지 */}
      <p className="mt-5 text-lg text-black text-center font-['SD PixelGoodmorning TT']">
        얼굴이 감지되었습니다. <br />
        감정을 분석하시겠습니까?
      </p>

      {/* 버튼 그룹 */}
      <div className="flex gap-4 mt-5">
        <button
          onClick={() => navigate("/face-capture")} // ✅ 올바른 `navigate` 사용
          className="w-32 py-2 text-lg font-bold text-black bg-gradient-to-b from-white to-[#C0E088] 
                     border-2 border-black rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          다시 촬영
        </button>
        <button
          onClick={analyzeEmotion} // ✅ 감정 분석 요청
          className="w-32 py-2 text-lg font-bold text-black bg-gradient-to-b from-white to-[#C0E088] 
                     border-2 border-black rounded-xl shadow-md hover:scale-105 transition-transform"
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default FaceResultPage;
