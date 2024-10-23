import React from "react";
import "./CandidateDetails.css";
import candidate from "../../assets/candidate.png";

const CandidateDetails = () => {
  return (
    <>
      <div className="candidate-details-content">
        <div className="candidate-image">
          <img src={candidate} alt="" className="candidate-image" />
        </div>
        <div className="candidate-info-content">
          <h2>Who will apply for your vacancies?</h2>
          <div className="candidate-info">
            <h1>Candidates trust us</h1>
            <p>
              Student's Job is the most recognizable job search platform in
              Belarus
            </p>
          </div>
          <div className="candidate-info">
            <h1>Your candidate is already here</h1>
            <p>
              More than 2.7 million resumes are posted on the service. On
              average 160 thousand visitors to Student's Job every day
            </p>
          </div>
          <div className="candidate-info">
            <h1>Active and interested candidates</h1>
            <p>
              On average, people spend 9 minutes on the Student's Job website.
              This is more than on other Belarusian sites for finding employees
              and work
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDetails;
