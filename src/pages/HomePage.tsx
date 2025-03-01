import React from "react"; 
import { BambooContainer,  HomeActions, HomeHeader } from "@/features/home"; 
import HomeLogo from "@/shared/ui/HomeLogo";

const HomePage: React.FC = () => { 

  return (
    <div className="relative flex flex-col w-screen h-screen bg-white ">
      <HomeHeader />  
      <div className="relative flex flex-col items-center justify-center h-full"> 
        <div className="absolute top-1/9 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
         <HomeLogo />
        </div> 
        <div className="absolute top-2/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <BambooContainer />
        </div> 
      </div> 
      <div className="absolute bottom-6 left-0 right-0 flex justify-center">
        <HomeActions />
      </div>
      
    </div>
  );
};

export default HomePage;
