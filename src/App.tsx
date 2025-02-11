import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./router";

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
