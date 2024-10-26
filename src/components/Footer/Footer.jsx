import React from "react";
import "./Footer.css";
import logofooter from "../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img-descr-social">
        <div className="footer-logo">
          <img src={logofooter} alt="" className="img-footer" />
          <h1>Student's Job</h1>
        </div>
        <div className="footer-description">
          <p>
            We help people, especially those who find it difficult to find a
            job, giving everyone the opportunity to fulfill their dreams!
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
            />
          </a>

          <a href="https://www.instagram.com" aria-label="Telegram">
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
            />
          </a>
          <a href="https://www.instagram.com" aria-label="Github">
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
            />
          </a>
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
          />
        </div>
      </div>
      <div className="footer-pages">
        <div className="heading-footer-pages">
          <h1>Pages</h1>
        </div>
        <div className="paragraph-footer-pages">
          <p>Vacancies</p>
          <p>Summary</p>
          <p>Chat</p>
          <p>About</p>
          <p>Auction</p>
        </div>
      </div>
      <div className="footer-additional">
        <div className="heading-footer-additional">
          <h1>Additional</h1>
        </div>
        <div className="paragraph-footer-additional">
          <p>Our foundation</p>
          <p>Our Mission</p>
          <p>Who we are</p>
          <p>FAQ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
