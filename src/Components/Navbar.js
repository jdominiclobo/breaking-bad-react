import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="title">
        Breaking Bad mania
      </Link>
      <div className="links">
        <Link
          to="/cast"
          style={{
            background: "none",
            paddingLeft: "3rem",
          }}
        >
          Characters
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
