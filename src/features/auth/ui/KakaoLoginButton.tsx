import React from "react";
import kakaoLoginImg from "@/shared/assets/images/kakao_login_medium_wide.png";

interface KakaoLoginButtonProps {
  onClick: () => void;
}

export const KakaoLoginButton: React.FC<KakaoLoginButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="w-auto h-auto p-0 border-none">
      <img
        src={kakaoLoginImg}
        alt="카카오 로그인"
        className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto object-contain"
      />
    </button>
  );
};

export default KakaoLoginButton;
