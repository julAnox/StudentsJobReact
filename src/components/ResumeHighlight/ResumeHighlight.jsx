import React from "react";
import "./ResumeHighlight.css";

const ResumeHighlight = () => {
  return (
    <div className="resume-highlight">
      <div className="content">
        <h2>Why Upload Your Resume on Our Platform?</h2>
        <p className="description">
          A resume is your introduction to potential employers. Describe your
          skills and experiences, and let the best opportunities find you.
        </p>
        <button className="upload-button">Upload Your Resume Now</button>
      </div>
      <div className="benefits">
        <div className="benefit">
          <div className="circle">75%</div>
          <div>
            <h3>Your Resume is Seen by Employers</h3>
            <p>
              75% of employers actively search for candidates on our platform.
              Increase your chances of getting noticed.
            </p>
          </div>
        </div>
        <div className="benefit">
          <div className="circle">90%</div>
          <div>
            <h3>Find Jobs Matching Your Skills</h3>
            <p>
              Over 90% of job postings are matched with relevant resumes. Get
              job recommendations that fit your profile.
            </p>
          </div>
        </div>
        <div className="benefit">
          <div className="circle">85%</div>
          <div>
            <h3>Receive Personalized Job Alerts</h3>
            <p>
              Get alerts for jobs that match your profile and never miss out on
              a new opportunity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeHighlight;
