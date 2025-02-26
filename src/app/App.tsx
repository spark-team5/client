import React from "react"; 
import { AppRoutes } from "@/app/routes"; 

const App: React.FC = () => {
  return (
    <>
      <div className="h-screen w-screen flex flex-col">  
 
        <main className="flex flex-grow items-center justify-center bg-gray-100">
          <div className="w-full max-w-6xl h-full flex items-center justify-center p-6">
            <AppRoutes />
          </div>
        </main> 
      </div>
    </>
  );
};

export default App;
