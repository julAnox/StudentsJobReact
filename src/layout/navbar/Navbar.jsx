import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="logo-container">
          <div className="gap-logo">
            <p className="hoverable">Student's</p>
            <img src={logo} alt="Logo" className="logo" />
            <p className="hoverable">Job</p>
          </div>
        </div>
        <div className="main-nav-content">
          <p className="hoverable">Vacancies</p>
          <p className="hoverable">Summary</p>
          <p className="hoverable">Chat</p>
          <p className="hoverable">About</p>
        </div>
      </div>
      <div className="log-sig-ava">
        <Link to="/login" className="underline hoverable">
          <p>Log In</p>
        </Link>
        <p>|</p>
        <Link to="/signup" className="underline hoverable">
          <p>Sign Up</p>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu">
          <p className="hoverable">Vacancies</p>
          <p className="hoverable">Summary</p>
          <p className="hoverable">Chat</p>
          <p className="hoverable">About</p>
          <Link to="/login" className="underline hoverable">
            Log In
          </Link>
          <Link to="/signup" className="underline hoverable">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
