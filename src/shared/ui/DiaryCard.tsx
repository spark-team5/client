import React from "react";
import { Image } from "./Image";
import { Title } from "./Title";
import { Description } from "./Description";
import { DiaryEntry } from "@/entities/diary";

export const DiaryCard: React.FC<DiaryEntry> = ({ imageSrc, title, description, date }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl transition-transform transform hover:scale-105">
      <figure>
        <Image src={imageSrc} alt={title} />
      </figure>
      <div className="card-body">
        <Title text={title} />
        <Description text={description} />
        <p className="text-sm text-gray-500">📅 {date}</p>
      </div>
    </div>
  );
};
