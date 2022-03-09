import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="home" className="title">
        Breaking Bad mania
      </Link>
      <div className="links">
        <Link to="home" style={{ background: "none", paddingLeft: "5rem" }}>
          Home
        </Link>
        <Link to="/" style={{ background: "none", paddingLeft: "2rem" }}>
          Characters
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
