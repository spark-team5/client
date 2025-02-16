import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  // ✅ 카카오 로그인 처리 함수
  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = `${window.location.origin}/login`;
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;
  };

  // ✅ 카카오 로그인 리디렉션 처리
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      console.log("카카오 인가 코드 📩:", code);

      // ✅ 이후 백엔드 API 연동할 예정 (지금은 임시 토큰 저장)
      localStorage.setItem("token", "fake-kakao-token");

      console.log("카카오 로그인 성공 ✅");
      navigate("/");
    }
  }, [navigate]);
 

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-6">
      {/* 로그인 헤더 */}
      <h1 className="text-2xl font-bold text-center mt-12"> forRest</h1> 
      {/* ✅ 카카오 로그인 버튼 (이미지 크기 유지) */}
      <button 
        onClick={handleKakaoLogin} 
        className="w-auto h-auto p-0 border-none"
      >
        <img
          src="/assets/images/kakao_login_medium_wide.png"
          alt="카카오 로그인"
          className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto object-contain"
        />
      </button>

      {/* 로그인 없이 시작하기 버튼 */}
      <div className="mt-6">
        <button
          className="btn border-gray-400 text-black bg-white hover:bg-gray-200 w-full max-w-xs"
          onClick={() => navigate("/home")}
        >
          로그인 없이 시작하기
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
