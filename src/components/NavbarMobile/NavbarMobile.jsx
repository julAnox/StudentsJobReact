import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavbarMobile.css";

function NavbarMobile({ isOpen, toggleMenu }) {
  const { t } = useTranslation();

  return (
    isOpen && (
      <div className="mobile-menu-wrapper" onClick={toggleMenu}>
        <div className="mobile-menu">
          <Link to="/vacancies" className="underline" onClick={toggleMenu}>
            {t("vacancies")}
          </Link>
          <Link to="/summary" className="underline" onClick={toggleMenu}>
            {t("summary")}
          </Link>
          <Link to="/chat" className="underline" onClick={toggleMenu}>
            {t("chat")}
          </Link>
          <Link to="/about" className="underline" onClick={toggleMenu}>
            {t("about")}
          </Link>
          <Link to="/auction" className="underline" onClick={toggleMenu}>
            {t("auction")}
          </Link>
          <div className="mobile-menu-bottom">
            <Link to="/profile" className="underline" onClick={toggleMenu}>
              {t("profile")}
            </Link>
            <Link to="/login" className="underline" onClick={toggleMenu}>
              {t("log_in")}
            </Link>
            <Link to="/signup" className="underline" onClick={toggleMenu}>
              {t("sign_up")}
            </Link>
          </div>
        </div>
      </div>
    )
  );
}

export default NavbarMobile;
