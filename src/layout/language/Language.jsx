import React from "react";
import { useTranslation } from "react-i18next";
import "./Language.css";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="language-switcher">
      <button onClick={() => handleLanguageChange("en")}>English</button>
      <button onClick={() => handleLanguageChange("ru")}>Русский</button>
    </div>
  );
};

export default LanguageSwitcher;
