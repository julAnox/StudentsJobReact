import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./LogInPage.css";

function LogInPage() {
  const { t } = useTranslation();

  return (
    <div className="flex-r container-login">
      <div className="flex-r login-wrapper-login">
        <div className="login-text-login">
          <h1>{t("log_in")}</h1>
          <p>{t("welcome_message_login")}</p>
          <form className="flex-c">
            <div className="input-box-login">
              <span className="label-login">{t("email")}</span>
              <div className="flex-r input-login">
                <input
                  type="text"
                  placeholder={t("email_placeholder")}
                  className="login-input"
                  required
                />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-login">
              <span className="label-login">{t("password")}</span>
              <div className="flex-r input-login">
                <input
                  type="password"
                  placeholder={t("password_placeholder")}
                  className="login-input"
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <Link to="/home" className="link-button">
              <button className="btn-login-custom" type="button">
                {t("log_in_button")}
              </button>
            </Link>
            <span className="extra-line-login">
              <span>{t("dont_have_account")}</span>
              <Link to="/signup" className="link-signup">
                {t("sign_up")}
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogInPage;
