import React from "react";
import WelcomeText from "@/features/welcome/ui/WelcomeText";
import { WelcomeButton } from "@/features/welcome";

const WelcomePage: React.FC = () => {
  return (
    <div
      className="overflow-hidden"
    >
      <WelcomeText />
      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
        
        <WelcomeButton />
      </div>
    </div>
  );
};

export default WelcomePage;
