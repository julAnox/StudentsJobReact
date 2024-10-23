import React, { useEffect } from "react";
import "./ResumeAdditionBlock.css";
import ladder from "../../assets/steps.png";

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

    const steps = document.querySelectorAll(
      ".step-left-01, .step-right-02, .step-left-03, .step-right-04"
    );
    steps.forEach((step) => observer.observe(step));

    return () => {
      steps.forEach((step) => observer.unobserve(step));
    };
  }, []);

  return (
    <div className="resume-addition-block">
      <h1 className="resume-title-steps">
        How to Start Your Search for Candidates?
      </h1>
      <div className="ladder-container">
        <img src={ladder} alt="ladder" className="ladder-image" />
        <div className="resume-steps">
          <div className="step-left-01">
            <span className="step-number01">Step 1</span>
            <h2>Register</h2>
            <p>
              Thus, you will gain access to actions on the Student's Job
              website.
            </p>
          </div>
          <div className="step-right-02">
            <span className="step-number02">Step 2</span>
            <h2>Think about what you want</h2>
            <p>Define the role and responsibilities.</p>
          </div>
          <div className="step-left-03">
            <span className="step-number03">Step 3</span>
            <h2>Get busy</h2>
            <p>Start looking for employees for yourself</p>
          </div>
          <div className="step-right-04">
            <span className="step-number04">Step 4</span>
            <h2>Use our site</h2>
            <p>You can combine business with pleasure</p>
          </div>
        </div>
      </div>
      <button
        className="summary-step-button"
        onClick={() => alert("Button clicked!")}
      >
        Start recruiting on Student's Job
      </button>
    </div>
  );
};

export default ResumeAdditionBlock;
