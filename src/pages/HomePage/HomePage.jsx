import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import SwitcherLang from "../../components/SwitcherLang/SwitcherLang";
import Facts from "../../components/Facts/Facts";
import bghome from "../../assets/bg-home.jpg";
import Advantages from "../../components/Advantages/Advantages";
import "./HomePage.css";

function HomePage() {
  const { t } = useTranslation();

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
          <div className="language-switcher">
            <SwitcherLang />
          </div>
        </div>
      </div>
      <div className="main">
        <Advantages />
        <Facts />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
