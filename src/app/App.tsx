import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "@/routes";
import { Navbar } from "@/widgets/Navbar";

const App: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <Navbar />
        <main className="flex flex-col items-center justify-center w-full max-w-4xl px-4 py-6">
          <AppRoutes />
        </main>
      </div>
    </>
  );
};

export default App;
