import React from "react";
import kakaoLoginImg from "@/shared/assets/images/kakao_login_medium_wide.svg";

interface KakaoLoginButtonProps {
  onClick: () => void;
}

export const KakaoLoginButton: React.FC<KakaoLoginButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="w-auto h-auto p-0 border-none">
      <img
        src={kakaoLoginImg}
        alt="카카오 로그인"
        style={{ width: '320px', height: '50px' }} // 이미지 크기 변경
      />
    </button>
  );
};

export default KakaoLoginButton;
