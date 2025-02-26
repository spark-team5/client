import React from "react";

interface LoginTextProps {
  texts: string[]; // 두 개의 텍스트 배열
}

const LoginText: React.FC<LoginTextProps> = ({ texts }) => {
  return (
    <div className="absolute left-0 right-0 top-1/3 flex justify-center text-center text-black text-xl font-normal font-['SD PixelGoodmorning TT'] leading-[26.80px]">
      <div>{texts[0]}<br />{texts[1]}</div>
    </div>
  );
};

export default LoginText;
