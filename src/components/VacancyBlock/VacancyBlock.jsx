import React from "react";
import "./VacancyBlock.css";

const VacancyBlock = () => {
  return (
    <div className="vacancy-block">
      <h3 className="vacancy-title">Software Engineer</h3>
      <p className="vacancy-description">
        Develop and maintain web applications.
      </p>
      <div className="vacancy-info">Location: Minsk | Salary: 1500 BYN</div>
      <div className="vacancy-action">
        <button className="vacancy-button">Apply Now</button>
      </div>
    </div>
  );
};

export default VacancyBlock;
