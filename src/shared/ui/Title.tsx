import React from "react";

interface TitleProps {
  text: string;
}

export const Title: React.FC<TitleProps> = ({ text }) => (
  <h2 className="text-lg font-bold">{text}</h2>
);
