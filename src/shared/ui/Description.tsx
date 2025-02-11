import React from "react";

interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => (
  <p className="text-sm text-gray-600">{text}</p>
);
