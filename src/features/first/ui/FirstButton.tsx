import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import kakaoLoginImg from "@/shared/assets/images/WelcomeButton.svg";
import Button from "@/shared/ui/BaseButton"; // ✅ Button 컴포넌트 가져오기

export const FirstButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    alert("로그인창으로 이동");
    navigate("/login");
  };

  const handleEnterClick = () => {
    alert("포,레스트 입장하기 클릭됨!"); // ✅ 원하는 기능 넣기 (예: 페이지 이동)
    navigate("/home"); // ✅ 홈 화면 또는 메인 페이지로 이동
  };

  return (
    <div className="flex flex-col items-center gap-4"> 
      {/* ✅ 카카오 로그인 버튼 */}
      

      {/* ✅ 추가: 포레스트 입장하기 버튼 */}
      <Button text="포,레스트 입장하기" onClick={handleEnterClick} className="!w-[400px] flex-shrink-0" />

      {/* ✅ 모달 창 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-200/60 flex justify-center items-center z-50">
          <div className="w-[321px] h-[165px] p-1 bg-gradient-to-b from-[#999999] to-white rounded-[10px] 
            shadow-[inset_0px_0px_4px_0px_rgba(255,255,255,1.00)] border border-black flex-col justify-start items-start inline-flex">
            
            <div className="self-stretch h-8 py-2.5 justify-between items-center inline-flex">
              <div className="text-center text-[#3b3a39] text-base font-normal leading-snug">
                포,레스트
              </div>
              <div onClick={closeModal} className="cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="url(#paint0_linear_9_7)" />
                  <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" stroke="black" />
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="black"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_9_7" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset="1" stopColor="#FF5757" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="self-stretch h-[125px] px-2.5 py-4 bg-[#f4f4f4] rounded-md border border-[#3b3a39] flex-col justify-center items-center gap-3 flex">
              <div className="flex-col justify-start items-center gap-1.5 flex">
                <div className="text-center text-[#3b3a39] text-lg font-normal leading-normal">
                  포,레스트를 이용하기 위해<br />카카오톡 로그인이 필요합니다
                </div>
              </div>
              <div className="justify-start items-start gap-3 inline-flex">
                <div className="p-1 bg-white border border-black flex-col justify-center items-center gap-2.5 inline-flex">
                  <div
                    onClick={handleConfirm}
                    className="px-12 py-0.5 bg-white rounded-[1px] border border-black justify-center items-center gap-2.5 inline-flex cursor-pointer"
                  >
                    <div className="text-center text-[#3b3a39] text-base font-normal leading-snug">확인</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FirstButton;
