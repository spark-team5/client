import React from "react";
import { useKakaoAuth } from "@/features/auth";
import { KakaoLoginButton, GuestLoginButton, LoginHeader } from "@/features/auth";

const LoginPage: React.FC = () => {
  const { handleKakaoLogin } = useKakaoAuth();

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-6">
      {/* 로그인 헤더 */}
      <LoginHeader />

      <div className="mt-120">
        <GuestLoginButton />
      </div>

      {/* ✅ 카카오 로그인 버튼 */}
      <KakaoLoginButton onClick={handleKakaoLogin} />
    </div>
  );
};

export default LoginPage;
