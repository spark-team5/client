import React, { useState } from "react";
import { useKakaoAuth } from "@/features/auth";
import { KakaoLoginButton } from "@/features/auth";
import LoginDots from "@/features/auth/ui/LoginDots";
import LoginText from "@/features/auth/ui/LoginText";

const LoginPage: React.FC = () => {
  const { handleKakaoLogin } = useKakaoAuth();

  const [dotPosition, setDotPosition] = useState(0); // 0, 1, 2 상태로 변경
  const [text, setText] = useState([
    "나만의 대나무 캐릭터를", 
    "키울 수 있어요",         
  ]); 
  const text1=["나만의 대나무 캐릭터를","일기를 쓰면", "AI가 내용에 맞는"]
  const text2=["키울 수 있어요","그림을 그려줘요.","메뉴 추천과 감정 분석까지!"]
  // 카카오 로그인 버튼 클릭 시 호출되는 함수
  const handleLoginClick = () => {
    if (dotPosition < 2) {
      setDotPosition(dotPosition + 1);
      setText([text1[dotPosition+1], text2[dotPosition+1]]);
    } else {
      handleKakaoLogin(); // 로그인 창으로 리디렉션
    }
  };

  return (
    <div className="overflow-hidden">
      <LoginText texts={text} />
      <LoginDots position={dotPosition} />
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        {/* 버튼을 아래쪽 중앙에 배치 */}
        <KakaoLoginButton onClick={handleLoginClick} />
      </div>
    </div>
  );
};

export default LoginPage;
