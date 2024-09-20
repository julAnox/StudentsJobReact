import React from "react";
import factlove from "../../assets/fact-love.png";
import factcompany from "../../assets/fact-company.png";
import factuser from "../../assets/fact-user.png";
import { useTranslation } from "react-i18next";
import "./Facts.css";

function Facts() {
  const { t } = useTranslation();

  return (
    <div className="second-main">
      <div className="second-main-heading">
        <h2>{t("second_main_heading")}</h2>
        <p>{t("second_main_description")}</p>
      </div>
      <div className="second-main-impact-all">
        <div className="second-main-impact">
          <img src={factlove} alt="Fact love" />
          <p>{t("fact_love")}</p>
        </div>
        <div className="second-main-impact">
          <img src={factcompany} alt="Fact company" />
          <p>{t("fact_company")}</p>
        </div>
        <div className="second-main-impact">
          <img src={factuser} alt="Fact user" />
          <p>{t("fact_user")}</p>
        </div>
      </div>
    </div>
  );
}

export default Facts;
