import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content px-6">
      <div className="flex-1"> 
        <Link to="/" className="btn btn-ghost text-xl">Diary App</Link>
      </div>
      <div className="flex-none space-x-4">
        <Link to="/" className="btn btn-primary">Record</Link>
        <Link to="/generated" className="btn btn-accent">Generated</Link>
        <Link to="/history" className="btn btn-secondary">History</Link>
      </div>
    </div>
  );
};

export default Navbar;
