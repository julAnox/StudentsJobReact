import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./SignUpPage.css";

function SignUpPage() {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [repeatPassword, setRepeatPassword] = useState("");
  //   const navigate = useNavigate();

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();

  //     if (password !== repeatPassword) {
  //       alert("Passwords do not match");
  //       return;
  //     }

  //     const userData = {
  //       email: email,
  //       password: password,
  //     };

  //     try {
  //       localStorage.setItem("userRegData", JSON.stringify(userData));
  //       navigate("/infoabout");
  //     } catch (error) {
  //       console.error("Error creating account:", error);
  //     }
  //   };
  const { t } = useTranslation();

  return (
    <div className="flex-r container-sign-up">
      <div className="flex-r login-wrapper-sign-up">
        <div className="login-text-sign-up">
          <h1>{t("sign_up")}</h1>
          <p>{t("please_enter_your_email_and_create_password")}</p>
          <form className="flex-c">
            <div className="input-box-sign-up">
              <span className="label-sign-up">{t("email")}</span>
              <div className="flex-r input-sign-up">
                <input type="text" placeholder="name@abc.com" required />
                <i className="fas fa-at"></i>
              </div>
            </div>
            <div className="input-box-sign-up">
              <span className="label-sign-up">{t("password")}</span>
              <div className="flex-r input-sign-up">
                <input type="password" placeholder={t("password")} required />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="input-box1-sign-up">
              <span className="label-sign-up">{t("repeat_password")}</span>
              <div className="flex-r input1-sign-up">
                <input
                  type="password"
                  placeholder={t("repeat_password")}
                  required
                />
                <i className="fas fa-lock"></i>
              </div>
            </div>
            <div className="check-sign-up">
              <input type="checkbox" required />
              <span>{t("agree_terms")}</span>
            </div>
            <Link to="/home" className="btn-sign-up-link">
              <button className="btn-sign-up" type="button">
                {t("create_account")}
              </button>
            </Link>
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
