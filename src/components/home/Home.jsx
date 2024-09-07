import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import skills from "../../assets/skills.jpg";
import feauture from "../../assets/feature.jpg";
import flexibility from "../../assets/flexibility.jpg";
import advice from "../../assets/advice.jpg";
import practice from "../../assets/practice.jpg";
import heart_love from "../../assets/heartlove.jpg";
import bghome from "../../assets/bg-home.jpg";
import { useInView } from "react-intersection-observer";
import "./Home.css";

function Home() {
  const { t } = useTranslation();

  const { ref: mainRef, inView: mainInView } = useInView({
    triggerOnce: true,
    threshold: 0.008,
  });

  useEffect(() => {
    const handleScroll = () => {
      const bgImage = document.querySelector(".bg-home");
      const scrollY = window.scrollY;
      bgImage.style.transform = `translateY(${scrollY * 0.5}px)`;
      bgImage.style.filter = `blur(${Math.min(scrollY / 100, 5)}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className="parallax-container">
        <img src={bghome} alt={t("welcome_message")} className="bg-home" />
        <div className="overlay">
          <div className="parallax-text">{t("welcome_message")}</div>
          <p className="hero-subtitle">{t("hero_subtitle")}</p>
          <div className="search-box">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              className="search-input"
            />
            <button className="search-btn">{t("search_button")}</button>
          </div>
        </div>
      </div>
      <div className="main" ref={mainRef}>
        <div className={`heading-and-impact ${mainInView ? "fade-in" : ""}`}>
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
      </div>
      <Footer />
    </div>
  );
}

export default Home;
