import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavbarPages.css";

function NavbarPages() {
  const { t } = useTranslation();
  return (
    <div className="main-nav-content">
      <Link to="/vacancies" className="underline hoverable">
        <p>{t("vacancies")}</p>
      </Link>
      <Link to="/summary" className="underline hoverable">
        <p>{t("summary")}</p>
      </Link>
      <Link to="/chat" className="underline hoverable">
        <p>{t("chat")}</p>
      </Link>
      <Link to="/about" className="underline hoverable">
        <p>{t("about")}</p>
      </Link>
      <Link to="/auction" className="underline hoverable">
        <p>{t("auction")}</p>
      </Link>
    </div>
  );
}

export default NavbarPages;
