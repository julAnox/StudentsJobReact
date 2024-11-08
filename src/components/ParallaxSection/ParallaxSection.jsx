import React, { useEffect } from "react";
import bghome from "../../assets/bg-home.jpg";
import OverlaySection from "../OverlaySection/OverlaySection";
import "./ParallaxSection.css";

function ParallaxSection() {
  useEffect(() => {
    const handleScroll = () => {
      const bgImage = document.querySelector(".bg-home");
      const scrollY = window.scrollY;

      if (window.innerWidth > 400) {
        bgImage.style.transform = `translateY(${scrollY * 0.5}px)`;
      } else {
        bgImage.style.transform = `translateY(0px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container">
      <OverlaySection />
      <img src={bghome} alt="Background" className="bg-home" />
    </div>
  );
}

export default ParallaxSection;
