import React from "react";
import "./AboutPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutPic from "../../components/AboutPic/AboutPic";
import AboutFoundation from "../../components/AboutFoundation/AboutFoundation";
import AboutMission from "../../components/AboutMission/AboutMission";
import AboutFaq from "../../components/AboutFaq/AboutFaq";
import AboutQuestions from "../../components/AboutQuestions/AboutQuestions";
import AboutContact from "../../components/AboutContact/AboutContact";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Navbar />
      <AboutPic />
      <AboutFoundation />
      <AboutMission />
      <AboutFaq />
      <AboutQuestions />
      <AboutContact />
      <Footer />
    </div>
  );
};

export default AboutPage;
