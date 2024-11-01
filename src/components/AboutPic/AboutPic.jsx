import React from "react";
import { useTranslation } from "react-i18next";
import "./AboutPic.css";

const AboutPic = () => {
  const { t } = useTranslation();
  return (
    <div className="about-pic-container">
      <div className="about-pic-text">
        <h3>{t("solid_foundation")}</h3>
      </div>
    </div>
  );
};

export default AboutPic;
