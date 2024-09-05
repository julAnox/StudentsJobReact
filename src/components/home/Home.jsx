import React, { useEffect } from "react";
import Navbar from "../../layout/navbar/Navbar";
import Footer from "../../layout/footer/Footer";
import moneyIcon from "../../assets/money.png";
import bookIcon from "../../assets/book.png";
import vscodeIcon from "../../assets/vscode.png";
import instIcon from "../../assets/inst.png";
import tgIcon from "../../assets/tg.png";
import vkIcon from "../../assets/vk.png";
import bghome from "../../assets/bg-home.jpg";
import "./Home.css";

function Home() {
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
        <img src={bghome} alt="Background" className="bg-home" />
      </div>
      <h2 className="advantages">Our advantages </h2>
      <div className="first-main-block">
        <div className="impact-all">
          <div className="impact">
            <img src={moneyIcon} alt="Money" />
            <h2>Money</h2>
            <div className="text-impact">
              <p>
                On our website, we can choose a vacancy for you and earn a lot
                of money from it, which can develop and promote you in life!
              </p>
            </div>
          </div>
          <div className="impact">
            <img src={bookIcon} alt="Book" />
            <h2>Self Improvement</h2>
            <div className="text-impact">
              <p>
                On our website you can find a job you like where you can develop
                yourself and gain new knowledge!
              </p>
            </div>
          </div>
          <div className="impact">
            <img src={vscodeIcon} alt="Vscode" />
            <h2>Experience</h2>
            <div className="text-impact">
              <p>
                Having found a job on our website, you will be able to gain
                experience that is highly valued in our world, without it you
                can’t go anywhere!
              </p>
            </div>
          </div>
        </div>

        <h2 className="modern-heading">Why us?</h2>

        <div className="facts">
          <div className="first-row-facts">
            <div className="fact">
              <p>Job search for students</p>
            </div>
            <div className="fact">
              <p>More than 2000 companies</p>
            </div>
          </div>
          <div className="second-row-facts">
            <div className="fact">
              <p>More than 210,000 vacancies</p>
            </div>
            <div className="fact">
              <p>More than 540,000 resumes</p>
            </div>
            <div className="fact">
              <p>About 1000 new users every day</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-main-block">
        <img src={instIcon} alt="Instagram" />
        <img src={tgIcon} alt="Telegram" />
        <img src={vkIcon} alt="VK" />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
