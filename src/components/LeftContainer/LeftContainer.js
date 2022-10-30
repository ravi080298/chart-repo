import React from "react";
import { NavLink as Link } from "react-router-dom";
import "./leftcontainer.css";
const LeftContainer = () => {
  return (
    <div className="topSection">
      <div>
        <Link to="/" end>
          <span>Home</span>
        </Link>
      </div>
      <div>
        <Link to="/dashboard">
          <span>Dashboard</span>
        </Link>
      </div>
    </div>
  );
};

export default LeftContainer;
