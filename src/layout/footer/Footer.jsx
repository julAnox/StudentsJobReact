import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-links">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#careers">Careers</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-links">
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#help-center">Help Center</a>
            </li>
            <li>
              <a href="#returns">Returns</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Account</h3>
          <ul className="footer-links">
            <li>
              <a href="#login">Login</a>
            </li>
            <li>
              <a href="#sign-up">Sign Up</a>
            </li>
            <li>
              <a href="#logout">Logout</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Connect</h3>
          <ul className="footer-links">
            <li>
              <a href="#instagram">Instagram</a>
            </li>
            <li>
              <a href="#telegram">Telegram</a>
            </li>
            <li>
              <a href="#vk">VK</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy">&copy; Student's Job. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
