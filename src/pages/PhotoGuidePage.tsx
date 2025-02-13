import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Button from "@/components/ui/Button";

const PhotoGuidePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white px-6">
      {/* 뒤로가기 버튼 */}
      <button className="absolute top-4 left-4 btn btn-circle btn-outline hover:scale-105 transition" onClick={() => navigate(-1)}>
        <FaArrowLeft className="text-gray-600 text-lg sm:text-xl" />
      </button>

      {/* 안내 문구 */}
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-center">📸 사진촬영 안내</h1>

      {/* DaisyUI 카드 적용 */}
      <div className="card bg-base-100 shadow-xl w-full max-w-sm sm:max-w-md md:max-w-lg mt-6">
        <div className="card-body text-center">
          {/* 팁 박스 */}
          <div className="badge badge-neutral px-4 py-2 text-sm sm:text-base">Tips</div>

          {/* 설명 문구 */}
          <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
            아래 기준에 맞게 사진을 촬영하면 더욱 정확한 결과를 얻을 수 있어요.
          </p>

          {/* 촬영 가이드 */}
          <ul className="mt-3 text-gray-700 text-sm sm:text-base md:text-lg list-disc pl-6 text-left">
            <li>정면에서 촬영</li>
            <li>이마가 잘 보이는</li>
            <li>안경을 벗은</li>
          </ul>
        </div>
      </div>

      {/* 안내 문구 */}
      <p className="mt-8 text-center text-gray-500 text-xs sm:text-sm">
        업로드된 사진은 AI 이미지 생성 이후 서버에서 즉시 삭제됩니다.
      </p>

      {/* 시작하기 버튼 */}
      <div className="mt-6 w-full max-w-sm">
        <Button text="시작하기" size="large" onClick={() => navigate("/face-capture")} />
      </div>
    </div>
  );
};

export default PhotoGuidePage;
