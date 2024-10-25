import React from "react";
import "./StepsTextContent.css";

const StepsTextContent = () => {
  return (
    <div className="steps-text-content">
      <div className="step-text-first">
        <h1>Register</h1>
        <p>
          Thus, you will gain access to actions on the Student's Job website.
        </p>
      </div>
      <div className="step-text-second">
        <h1>Think about what you want</h1>
        <p>Define the role and responsibilities.</p>
      </div>
      <div className="step-text-third">
        <h1>Get busy</h1>
        <p>Start looking for employees for yourself</p>
      </div>
      <div className="step-text-fourth">
        <h1>Use our site</h1>
        <p>You can combine business with pleasure</p>
      </div>
    </div>
  );
};

export default StepsTextContent;
