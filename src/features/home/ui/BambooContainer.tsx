import React, { useState, useEffect } from "react";
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
  const [hasJuksooni, setHasJuksooni] = useState<boolean | null>(null); // 상태 추가

  useEffect(() => {
    // 죽순이 상태 확인 API 호출
    fetch("https://qbdffmpbayqfbgja.tunnel-pt.elice.io/api/juksooni/status",{
      credentials: "include"
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.hasJuksooni) {
          setHasJuksooni(data.hasJuksooni);
          dispatch(setBambooState("blank"));
          setComplete(true);
        }
        else{
          setHasJuksooni(false)
          setComplete(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching status:", error);
      });
  }, []);

  const handleClickAdopt = () => {
    // 죽순 분양하기 버튼 클릭 시
    fetch("https://qbdffmpbayqfbgja.tunnel-pt.elice.io/api/juksooni/adopt", {
      method: "POST",
      credentials: "include", // 세션 또는 쿠키 기반 인증 필요 시 추가
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "CREATED") {
          dispatch(setBambooState("happy")); // 상태를 happy로 변경
          setComplete(true); // 완료 상태로 설정
        }
      })
      .catch((error) => {
        console.error("Error adopting Juksooni:", error);
      });
  };

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen w-full px-4">
      {/* BambooContainer */}
      <div
        className="relative flex flex-col items-center justify-center w-full 
                   max-w-[300px] sm:max-w-[340px] md:max-w-[480px] lg:max-w-[600px] 
                   aspect-[3/2] min-w-[330px] border-[1.5px] border-black p-4 sm:p-6 
                   rounded-3xl z-20 bg-gradient-to-b from-[#EAF4CE] to-white"
      >
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
            {/* 상태에 따라 다르게 처리 */}
            {hasJuksooni === null ? (
              <p>Loading...</p> // 상태 확인 중일 때
            ) : hasJuksooni ? (
              <EmotionImage imageUrl={bambooImages[bambooState]} />
            ) : (
              <>
                {/* 죽순 분양하기 버튼 */}
                <div className="relative z-10 flex flex-col items-center">
                  <Button text="죽순 분양하기" size="medium" onClick={handleClickAdopt} />
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* ✅ complete === true이면 MessageContainer 표시 */}
      {complete && (
        <div className="absolute top-6/8 left-1/2 w-[325px] transform -translate-x-1/2 -translate-y-1/2 z-20 ">
          <MessageContainer />
        </div>
      )}
    </div>
  );
};

export default BambooContainer;
