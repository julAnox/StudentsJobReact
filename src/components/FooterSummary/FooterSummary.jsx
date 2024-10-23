import React from "react";
import { useTranslation } from "react-i18next";
import "./FooterSummary.css";

const FooterSummary = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-summary">
      <div className="footer-container-summary">
        <div className="footer-column-summary">
          <h3 className="footer-heading-summary">{t("footer_company")}</h3>
          <ul className="footer-links-summary">
            <li>
              <a href="#about">{t("footer_about")}</a>
            </li>
            <li>
              <a href="#careers">{t("footer_careers")}</a>
            </li>
            <li>
              <a href="#contact">{t("footer_contact")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-summary">
          <h3 className="footer-heading-summary">{t("footer_support")}</h3>
          <ul className="footer-links-summary">
            <li>
              <a href="#faq">{t("footer_faq")}</a>
            </li>
            <li>
              <a href="#help-center">{t("footer_help_center")}</a>
            </li>
            <li>
              <a href="#returns">{t("footer_returns")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-summary">
          <h3 className="footer-heading-summary">{t("footer_account")}</h3>
          <ul className="footer-links-summary">
            <li>
              <a href="#login">{t("footer_login")}</a>
            </li>
            <li>
              <a href="#sign-up">{t("footer_sign_up")}</a>
            </li>
            <li>
              <a href="#logout">{t("footer_logout")}</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-summary">
          <h3 className="footer-heading-summary">{t("footer_connect")}</h3>
          <ul className="footer-links-summary">
            <li>
              <a href="#instagram">{t("footer_instagram")}</a>
            </li>
            <li>
              <a href="#telegram">{t("footer_telegram")}</a>
            </li>
            <li>
              <a href="#vk">{t("footer_vk")}</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer-copy-summary">{t("footer_copy")}</p>
    </footer>
  );
};

export default FooterSummary;
