import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useKakaoAuth = () => {
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

  return { handleKakaoLogin };
};
