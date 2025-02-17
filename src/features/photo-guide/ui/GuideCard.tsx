import React from "react";

export const GuideCard: React.FC = () => {
  return (
    <div className="card bg-white w-full max-w-sm sm:max-w-md md:max-w-lg mt-35 flex flex-col items-center text-center">
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
          <li>이마가 잘 보이게</li>
          <li>안경을 벗고 촬영</li>
        </ul>
      </div>
    </div>
  );
};

export default GuideCard;
