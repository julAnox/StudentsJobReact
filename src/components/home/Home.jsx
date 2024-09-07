import React, { useEffect } from "react";
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
  const { ref: mainRef, inView: mainInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
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
        <img src={bghome} alt="Background" className="bg-home" />
        <div className="overlay">
          <div className="parallax-text">Start your career with us!</div>
          <p className="hero-subtitle">
            Find your first job among thousands of vacancies developed
            specifically for students. Gain experience and skills that will help
            you become a sought-after specialist.
          </p>
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter job title..."
              className="search-input"
            />
            <button className="search-btn">Find a job</button>
          </div>
        </div>
      </div>
      <div className="main" ref={mainRef}>
        <div className={`heading-and-impact ${mainInView ? "fade-in" : ""}`}>
          <h2>Our advantages</h2>
          <div className="first-impact">
            <div className="impact">
              <img
                src={skills}
                alt="first-impact"
                className="img-first-impact"
              />
              <h4>Develop Your Skills</h4>
              <p>
                Find an internship or job that will help you develop your
                professional skills and gain practical experience.
              </p>
            </div>
            <div className="impact">
              <img
                src={feauture}
                alt="second-impact"
                className="img-second-impact"
              />
              <h4>Professions of the Future</h4>
              <p>
                Discover job opportunities in fields that will be relevant and
                in demand in the future.
              </p>
            </div>
            <div className="impact">
              <img
                src={flexibility}
                alt="third-impact"
                className="img-third-impact"
              />
              <h4>Flexible Schedule</h4>
              <p>
                Look for jobs with flexible schedules that allow you to balance
                your studies and work responsibilities.
              </p>
            </div>
            <div className="impact">
              <img
                src={advice}
                alt="fourth-impact"
                className="img-fourth-impact"
              />
              <h4>Career Growth Support</h4>
              <p>
                Receive advice and recommendations on career growth and
                successful job placement from professionals.
              </p>
            </div>
            <div className="impact">
              <img
                src={practice}
                alt="fifth-impact"
                className="img-fifth-impact"
              />
              <h4>Internships and Practice</h4>
              <p>
                Find an internship or job that will help you develop your
                professional skills and gain practical experience.
              </p>
            </div>
            <div className="impact">
              <img
                src={heart_love}
                alt="six-impact"
                className="img-six-impact"
              />
              <h4>Work in Your Favorite Field</h4>
              <p>
                Choose job openings in areas that genuinely interest you and
                start doing what you love now.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
