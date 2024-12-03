import React from "react";
import foundation from "../../assets/foundation.jpg";
import "./AboutFoundation.css";
import { useTranslation } from "react-i18next";

const AboutFoundation = () => {
  const { t } = useTranslation();
  return (
    <div className="section students-job-foundation">
      <div className="section-grid">
        <div className="foundation-image">
          <img src={foundation} alt="Students working together" />
        </div>
        <div className="foundation-content">
          <h2>{t("student's_job_foundation")}</h2>
          <p>
            {t("student's_job_foundation_info")}
            <ul>
              {t("feautures_added")}
              <li>A chat where users can communicate with employers.</li>
              <li>
                A simple and user-friendly design that doesn't push users away.
              </li>
              <li>The ability to edit personal profiles.</li>
              <li>
                Filtering options that allow users to sort through and exclude
                unwanted job listings.
              </li>
              <li>And many more details that you can see on our website.</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFoundation;
