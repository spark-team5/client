import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Button from "@/components/ui/Button";

const PhotoGuidePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen bg-transparent w-full relative">
      {/* 뒤로가기 버튼 */}
      <button 
        className="absolute top-4 left-4 p-2  rounded-full  hover:scale-105 transition"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft className="text-gray-600 text-sm sm:text-base" />
      </button>

      {/* 안내 문구 */}
      <p className="font-semibold text-2xl text-center">사진촬영 안내 문구</p>

      {/* DaisyUI 카드 적용 */}
      <div className="card bg-white w-full max-w-sm sm:max-w-md md:max-w-lg mt-35 flex flex-col items-center text-center ">
        <div className="card-body flex flex-col items-center text-center">
          {/* 팁 박스 */}
          <div className="badge badge-neutral px-4 py-3 text-base sm:text-sm rounded-[14px]">Tips</div>

          {/* 설명 문구 */}
          <p className="mt-2 text-gray-600 text-base sm:text-base md:text-lg">
            아래 기준에 맞게 사진을 촬영하면 <br/>
            더욱 정확한 결과를 얻을 수 있어요.
          </p>

          {/* 촬영 가이드 */}
          <ul className="mt-3 text-gray-700 text-base sm:text-base md:text-lg list-disc text-left">
            <li>정면에서 촬영</li>
            <li>이마가 잘 보이는</li>
            <li>안경을 벗은</li>
          </ul>
        </div>
      </div>

      {/* 안내 문구 */}
      <p className="mt-20 text-center text-gray-500 text-sm sm:text-sm">
        업로드된 사진은 AI 이미지 생성 이후<br/> 서버에서 즉시 삭제됩니다.
      </p>

      {/* 시작하기 버튼 중앙 정렬 */}
      <div className="mt-6 w-full flex justify-center">
        
        <Button text="시작하기" size="large" onClick={() => navigate("/face-capture")} />
      </div>
    </div>
  );
};

export default PhotoGuidePage;
