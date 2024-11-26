import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import "./SignUpPage.css";

function SignUpPage() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (event) => {
    event.preventDefault();

    if (password1 !== password2) {
      setError(t("password_mismatch"));
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/signup/",
        {
          email: email,
          password1: password1,
          password2: password2,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        window.location.href = "/profile";
      }
    } catch (error) {
      setError(error.response?.data?.error || t("signup_failed"));
    }
  };

  return (
    <div className="flex-r container-sign-up">
      <div className="flex-r login-wrapper-sign-up">
        <div className="login-text-sign-up">
          <h1>{t("sign_up")}</h1>
          <p>{t("please_enter_your_email_and_create_password")}</p>
          <form className="flex-c" onSubmit={handleSignup}>
            <div className="input-box-sign-up">
              <span className="label-sign-up">{t("email")}</span>
              <div className="flex-r input-sign-up">
                <input
                  type="email"
                  placeholder="name@abc.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-sign-up">
              <span className="label-sign-up">{t("password")}</span>
              <div className="flex-r input-sign-up">
                <input
                  type="password"
                  placeholder={t("password")}
                  value={password1}
                  onChange={(e) => setPassword1(e.target.value)}
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input-box1-sign-up">
              <span className="label-sign-up">{t("repeat_password")}</span>
              <div className="flex-r input1-sign-up">
                <input
                  type="password"
                  placeholder={t("repeat_password")}
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            {error && <div className="error-message">{error}</div>}
            <div className="check-sign-up">
              <input type="checkbox" required />
              <span>{t("agree_terms")}</span>
            </div>
            <button className="btn-sign-up" type="submit">
              {t("create_account")}
            </button>
            <span className="extra-line-sign-up">
              <span>{t("already_have_account")}</span>
              <Link to="/login" className="link-login">
                {t("log_in")}
              </Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
