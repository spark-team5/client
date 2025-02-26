import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useKakaoAuth = () => {
  const navigate = useNavigate();

  //  카카오 로그인 처리 함수
  const handleKakaoLogin = () => {
    const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY;
    const REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI; 
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    window.location.href = KAKAO_AUTH_URL;
  };

  //  카카오 로그인 리디렉션 처리
  useEffect(() => {
    // 현재 문서의 쿠키에서 'access' 토큰 값을 찾음
    const cookies = document.cookie.split("; ");
    const accessToken = cookies.find(cookie => cookie.startsWith("access="));

    if (accessToken) {
      // 쿠키에서 access token 값을 가져와서 로컬스토리지에 저장
      const token = accessToken.split("=")[1];
      localStorage.setItem("token", token);

      // 로그인 성공 후 원하는 페이지로 이동
      navigate("/home");
    } else {
      // 로그인 실패 시 자동으로 카카오 로그인 실행
      handleKakaoLogin();
    }
  }, [navigate]);

  return { handleKakaoLogin };
};
