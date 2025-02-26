import React from "react";
import { FirstButton } from "@/features/first";
import FirstText from "@/features/first/ui/FirstText";
import FirstHeader from "@/features/first/ui/FirstHeader";

const FirstPage: React.FC = () => {
  return (
    <div>
        <FirstHeader></FirstHeader>
        <FirstText></FirstText>
        <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        <FirstButton />
        </div>
    </div>
  );
};

export default FirstPage;
