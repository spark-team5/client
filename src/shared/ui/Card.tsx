import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl p-4">
      {children}
    </div>
  );
};
