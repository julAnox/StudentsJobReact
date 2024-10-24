import React, { useEffect } from "react";
import "./ResumeAdditionBlock.css";
import ladder from "../../assets/steps.png";
import number01 from "../../assets/number01.png";
import number02 from "../../assets/number02.png";
import number03 from "../../assets/number03.png";
import number04 from "../../assets/number04.png";
import stair from "../../assets/stair.png";
import platform from "../../assets/platform.png";

const ResumeAdditionBlock = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    const elements = document.querySelectorAll(
      ".platform, .number, .stair, .text"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="resume-addition-block">
      <h1 className="resume-title-steps">
        How to Start Your Search for Candidates?
      </h1>
      <div className="ladder-container">
        <img src={ladder} alt="Ladder" className="ladder-image" />

        <div className="resume-steps">
          <img src={number01} alt="Number 01" className="number number-01" />
          <div className="text text-01">
            <h2>Register</h2>
            <p>
              Thus, you will gain access to actions on the Student's Job
              website.
            </p>
          </div>

          <img src={stair} alt="Stair" className="stair stair-01" />

          <img src={number02} alt="Number 02" className="number number-02" />
          <div className="text text-02">
            <h2>Think about what you want</h2>
            <p>Define the role and responsibilities.</p>
          </div>

          <img src={stair} alt="Stair" className="stair stair-02" />

          <img src={number03} alt="Number 03" className="number number-03" />
          <div className="text text-03">
            <h2>Get busy</h2>
            <p>Start looking for employees for yourself</p>
          </div>

          <img src={stair} alt="Stair" className="stair stair-03" />

          <img src={number04} alt="Number 04" className="number number-04" />
          <div className="text text-04">
            <h2>Use our site</h2>
            <p>You can combine business with pleasure</p>
          </div>

          <img src={platform} alt="Platform" className="platform" />
        </div>
      </div>
    </div>
  );
};

export default ResumeAdditionBlock;
