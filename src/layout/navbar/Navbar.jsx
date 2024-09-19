import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.png";
import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <Link to="/home" className="underline hoverble">
          <div className="logo-container">
            <div className="gap-logo">
              <p>Student's</p>
              <img src={logo} alt="Logo" className="logo" />
              <p>Job</p>
            </div>
          </div>
        </Link>
        <div className="main-nav-content">
          <Link to="/vacancies" className="underline hoverable">
            <p>{t("vacancies")}</p>
          </Link>
          <p className="hoverable">{t("summary")}</p>
          <p className="hoverable">{t("chat")}</p>
          <p className="hoverable">{t("about")}</p>
        </div>
      </div>
      <div className="log-sig-ava">
        <Link to="/profile" className="underline hoverable">
          <p>{t("profile")}</p>
        </Link>
        <Link to="/login" className="underline hoverable">
          <p>{t("log_in")}</p>
        </Link>
        <p>|</p>
        <Link to="/signup" className="underline hoverable">
          <p>{t("sign_up")}</p>
        </Link>
      </div>
      <div
        className={`hamburger ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isMenuOpen && (
        <div className="mobile-menu-wrapper">
          <div className="mobile-menu">
            <div className="upper-section">
              <Link to="/vacancies" className="underline">
                <p className="hoverable">{t("vacancies")}</p>
              </Link>
              <p className="hoverable">{t("summary")}</p>
              <p className="hoverable">{t("chat")}</p>
              <p className="hoverable">{t("about")}</p>
            </div>
            <div className="bottom-section">
              <Link to="/profile" className="underline">
                {t("profile")}
              </Link>
              <Link to="/login" className="underline">
                {t("log_in")}
              </Link>
              <Link to="/signup" className="underline">
                {t("sign_up")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
