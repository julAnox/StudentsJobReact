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
            <p>Student's</p>
            <img src={logo} alt="Logo" className="logo" />
            <p>Job</p>
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
        <Link to="/profile" className="underline hoverable">
          <p>Profile</p>
        </Link>
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
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu">
            <div className="upper-section">
              <p className="hoverable">Vacancies</p>
              <p className="hoverable">Summary</p>
              <p className="hoverable">Chat</p>
              <p className="hoverable">About</p>
            </div>
            <div className="bottom-section">
              <a href="/profile" className="underline">
                Profile
              </a>
              <a href="/login" className="underline">
                Log In
              </a>
              <a href="/signup" className="underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
