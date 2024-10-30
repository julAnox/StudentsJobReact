import React from "react";
import { useTranslation } from "react-i18next";
import "./OverlaySection.css";

function OverlaySection() {
  const { t } = useTranslation();

  return (
    <div className="overlay">
      <div className="parallax-text">{t("welcome_message")}</div>
      <p className="hero-subtitle">{t("hero_subtitle")}</p>
      <div className="search-box-overlay">
        <input
          type="text"
          placeholder={t("search_placeholder")}
          className="search-input-overlay"
        />
        <button className="search-btn-overlay">{t("search_button")}</button>
      </div>
    </div>
  );
}

export default OverlaySection;
