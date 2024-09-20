import React from "react";
import skills from "../../assets/skills.jpg";
import feauture from "../../assets/feature.jpg";
import flexibility from "../../assets/flexibility.jpg";
import advice from "../../assets/advice.jpg";
import practice from "../../assets/practice.jpg";
import heart_love from "../../assets/heartlove.jpg";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import "./Advantages.css";

function Advantages() {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.008,
  });

  return (
    <div ref={ref} className={`heading-and-impact ${inView ? "fade-in" : ""}`}>
      <h2>{t("our_advantages")}</h2>
      <div className="first-impact">
        <div className="impact">
          <img
            src={skills}
            alt={t("develop_skills")}
            className="img-first-impact"
          />
          <h4>{t("develop_skills")}</h4>
          <p>{t("develop_skills_description")}</p>
        </div>
        <div className="impact">
          <img
            src={feauture}
            alt={t("professions_future")}
            className="img-second-impact"
          />
          <h4>{t("professions_future")}</h4>
          <p>{t("professions_future_description")}</p>
        </div>
        <div className="impact">
          <img
            src={flexibility}
            alt={t("flexible_schedule")}
            className="img-third-impact"
          />
          <h4>{t("flexible_schedule")}</h4>
          <p>{t("flexible_schedule_description")}</p>
        </div>
        <div className="impact">
          <img
            src={advice}
            alt={t("career_growth_support")}
            className="img-fourth-impact"
          />
          <h4>{t("career_growth_support")}</h4>
          <p>{t("career_growth_support_description")}</p>
        </div>
        <div className="impact">
          <img
            src={practice}
            alt={t("internships_practice")}
            className="img-fifth-impact"
          />
          <h4>{t("internships_practice")}</h4>
          <p>{t("internships_practice_description")}</p>
        </div>
        <div className="impact">
          <img
            src={heart_love}
            alt={t("work_favorite_field")}
            className="img-six-impact"
          />
          <h4>{t("work_favorite_field")}</h4>
          <p>{t("work_favorite_field_description")}</p>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
