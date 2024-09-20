import React, { useEffect } from "react";
import bghome from "../../assets/bg-home.jpg";
import OverlaySection from "../OverlaySection/OverlaySection";
import "./ParallaxSection.css";

function ParallaxSection() {
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
    <div className="parallax-container">
      <img src={bghome} alt="Background" className="bg-home" />
      <OverlaySection />
    </div>
  );
}

export default ParallaxSection;
