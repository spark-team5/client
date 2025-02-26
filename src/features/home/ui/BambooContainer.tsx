import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/app/providers/store";
import { setBambooState } from "@/app/config/redux/bambooSlice";

import { EmotionImage } from "@/features/home";
import Checker from "@/shared/assets/images/checker.png";
import Button from "@/shared/ui/BaseButton";
import MessageContainer from "./MessageContainer"; // ✅ 추가

export const BambooContainer: React.FC = () => {
  const dispatch = useDispatch();

  // ✅ Redux 상태 가져오기
  const bambooState = useSelector((state: RootState) => state.bamboo.bambooState);
  const bambooImages = useSelector((state: RootState) => state.bamboo.bambooImages);
  const bambooMessages = useSelector((state: RootState) => state.bamboo.bambooMessages);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [complete, setComplete] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setProgress(0);

    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setComplete(true); 
            dispatch(setBambooState("happy"));  // ✅ Redux 상태 변경
          }, 500);
          return 100;
        }
        return prev + 20;
      });
    }, 200);
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full px-4">
      {/* BambooContainer */}
      <div className="relative flex flex-col items-center justify-center w-full max-w-[280px] sm:max-w-[320px] md:max-w-[450px] lg:max-w-[600px] aspect-[3/2] min-w-[260px] border-[1.5px] border-black p-4 sm:p-6 rounded-3xl z-20" style={{ backgroundColor: "#EAF4CE" }}>
        {/* Checker 이미지 (배경) 또는 하얀색 배경 */}
        <div className="absolute inset-0 p-2 rounded-3xl">
          {complete ? (
            <div className="w-full h-full bg-white rounded-2xl border-[1.5px] border-black" />
          ) : (
            <img
              src={Checker}
              alt="Checker Background"
              className="w-full h-full object-cover rounded-2xl border-[1.5px] border-black"
            />
          )}
        </div>

        {/* complete === true이면 즉시 죽순 이미지 표시 */}
        {complete ? (
          <EmotionImage imageUrl={bambooImages[bambooState]} />
        ) : (
          <>
            {/* 로딩 중일 때 UI */}
            {loading ? (
              <div className="relative z-10 flex flex-col items-center w-full">
                <p className="text-gray-600 text-lg font-semibold text-center mb-4">
                  Loading...
                </p>
                {/* 로딩 바 */}
                <div className="relative w-[80%] h-6 bg-white border-[1.5px] border-black rounded-lg overflow-hidden">
                  <div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r transition-all duration-200"
                    style={{
                      width: `${progress}%`,
                      background: "linear-gradient(to bottom, #FFFFFF, #A2EB4E)", // ✅ 올바르게 수정
                    }}
                  />
                </div>
              </div>
            ) : (
              // 기본 상태 (분양받지 않았을 때)
              <div className="relative z-10 flex flex-col items-center">
                <p className="text-gray-600 text-lg font-semibold text-center mb-4">
                  {bambooMessages[bambooState]}
                </p>

                {/* 버튼 */}
                <Button text="죽순 분양받기" size="medium" onClick={handleClick} />
              </div>
            )}
          </>
        )}
      </div>

      {/* ✅ complete === true이면 MessageContainer 표시 */}
      {complete && (
        <div className="absolute top-5/7 left-1/2 w-[255px] transform -translate-x-1/2 -translate-y-1/2 z-20 ">
          <MessageContainer />
        </div> 
      )}
    </div>
  );
};

export default BambooContainer;
