import React, { useState } from "react";
import ResponseWindow from "../ResponseWindow/ResponseWindow";
import "./VacancyBlock.css";

const VacancyBlock = ({ vacancyData = {} }) => {
  const [isResponseWindowOpen, setIsResponseWindowOpen] = useState(false);
  const [selectedVacancy, setSelectedVacancy] = useState("");

  const {
    title = "React Web Developer",
    company = "Microsoft",
    location = "Minsk",
    salary = "1500BYN",
    description = "Here you can improve your skills like hard or soft",
  } = vacancyData;

  const handleApplyClick = () => {
    setSelectedVacancy(title);
    setIsResponseWindowOpen(true);
  };

  const handleCloseResponseWindow = () => {
    setIsResponseWindowOpen(false);
  };

  const handleSubmit = (file) => {
    console.log("File submitted:", file);
    setIsResponseWindowOpen(false);
  };

  return (
    <>
      <div className="vacancy-block">
        <h3 className="vacancy-title">{title}</h3>
        <p className="vacancy-description">{company}</p>
        <p className="vacancy-description">{description}</p>
        <div className="vacancy-info">
          Location: {location} | Salary: {salary}
        </div>
        <div className="vacancy-action">
          <button className="vacancy-button" onClick={handleApplyClick}>
            Apply Now
          </button>
        </div>
      </div>

      <ResponseWindow
        isOpen={isResponseWindowOpen}
        onClose={handleCloseResponseWindow}
        company={company}
        vacancy={selectedVacancy}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default VacancyBlock;
