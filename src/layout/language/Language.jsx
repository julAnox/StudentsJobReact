import React from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button
        className={currentLanguage === "en" ? "selected" : ""}
        onClick={() => handleLanguageChange("en")}
      >
        English
      </button>
      <button
        className={currentLanguage === "ru" ? "selected" : ""}
        onClick={() => handleLanguageChange("ru")}
      >
        Русский
      </button>
    </div>
  );
};

export default LanguageSwitcher;
