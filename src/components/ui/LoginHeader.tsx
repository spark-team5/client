import React from "react";

const LoginHeader: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-md backdrop-blur-md px-6 py-3 flex items-center justify-center w-full max-w-4xl mx-auto rounded-lg">
      {/* 중앙 - 로고 */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-black tracking-wide drop-shadow-md">
        forRest
      </h1>
    </div>
  );
};

export default LoginHeader;
