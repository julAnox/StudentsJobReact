import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./NavbarUser.css";

function NavbarUser() {
  const { t } = useTranslation();

  return (
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
  );
}

export default NavbarUser;
