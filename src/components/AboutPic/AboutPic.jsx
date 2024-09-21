import React from "react";
import aboutpic from "../../assets/about.jpg";
import "./AboutPic.css";

const AboutPic = () => {
  return (
    <div className="about-pic-container">
      <img src={aboutpic} alt="About" className="about-pic" />
      <div className="about-pic-text">
        <h3>A solid foundation gets better.</h3>
      </div>
    </div>
  );
};

export default AboutPic;
