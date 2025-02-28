import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useKakaoAuth = () => {
  const navigate = useNavigate();

  //  카카오 로그인 처리 함수
  const handleKakaoLogin = () => {
    const KAKAO_AUTH_URL = `https://qbdffmpbayqfbgja.tunnel-pt.elice.io/oauth2/authorization/kakao`;
    window.location.href = KAKAO_AUTH_URL;
  };
//https://qbdffmpbayqfbgja.tunnel-pt.elice.io/oauth2/authorization/kakao
//http://localhost:8080/oauth2/authorization/kakao
  //  카카오 로그인 리디렉션 처리
  useEffect(() => {
      navigate("/home");
  }, [navigate]);

  return { handleKakaoLogin };
};
