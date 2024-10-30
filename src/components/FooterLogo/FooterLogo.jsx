import React from "react";
import logofooter from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faGithub,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import "./FooterLogo.css";

const FooterLogo = () => {
  return (
    <div className="footer-logo-section">
      <div className="footer-logo">
        <img src={logofooter} alt="Student's Job logo" className="img-footer" />
        <h1>Student's Job</h1>
      </div>
      <div className="footer-description">
        <p>
          We help people, especially those who find it difficult to find a job,
          giving everyone the opportunity to fulfill their dreams!
        </p>
      </div>
      <div className="footer-social">
        <a href="https://www.instagram.com" aria-label="Instagram">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{
              color: "#acacac",
              width: "27px",
              height: "27px",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#acacac")}
            className="footer-icon"
          />
        </a>
        <a href="https://t.me" aria-label="Telegram">
          <FontAwesomeIcon
            icon={faTelegram}
            style={{
              color: "#acacac",
              width: "27px",
              height: "27px",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#acacac")}
            className="footer-icon"
          />
        </a>
        <a href="https://github.com" aria-label="Github">
          <FontAwesomeIcon
            icon={faGithub}
            style={{
              color: "#acacac",
              width: "27px",
              height: "27px",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#acacac")}
            className="footer-icon"
          />
        </a>
        <a href="https://tiktok.com" aria-label="Tiktok">
          <FontAwesomeIcon
            icon={faTiktok}
            style={{
              color: "#acacac",
              width: "27px",
              height: "27px",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#acacac")}
            className="footer-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default FooterLogo;
