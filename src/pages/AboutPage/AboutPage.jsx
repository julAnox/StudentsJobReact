import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AboutFoundation from "../../components/AboutFoundation/AboutFoundation";
import AboutMission from "../../components/AboutMission/AboutMission";
import AboutFaq from "../../components/AboutFaq/AboutFaq";
import AboutContacts from "../../components/AboutContacts/AboutContacts";
import AboutPic from "../../components/AboutPic/AboutPic";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <AboutPic />
      <div className="about-container">
        <AboutFoundation />
        <AboutMission />
        <AboutFaq />
        <AboutContacts />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
