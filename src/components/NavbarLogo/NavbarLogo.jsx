import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavbarLogo.css";

function NavbarLogo() {
  return (
    <Link to="/home" className="underline hoverble">
      <div className="logo-container">
        <div className="gap-logo">
          <p>Student's</p>
          <img src={logo} alt="Logo" className="logo" />
          <p>Job</p>
        </div>
      </div>
    </Link>
  );
}

export default NavbarLogo;
