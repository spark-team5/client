import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-500">404 - 페이지를 찾을 수 없습니다.</h1>
      <p className="text-lg">잘못된 경로로 접근하셨습니다.</p>
      <Link to="/" className="btn btn-primary mt-4">홈으로 돌아가기</Link>
    </div>
  );
};

export default NotFoundPage;
