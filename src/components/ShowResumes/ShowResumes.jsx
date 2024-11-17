import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./ShowResumes.css";

function ShowResumes() {
  const location = useLocation();
  const [resumes] = useState(
    location.state?.newResume ? [location.state.newResume] : []
  );

  const [selectedResumeIndex, setSelectedResumeIndex] = useState(null);

  const handleSelectResume = (index) => {
    setSelectedResumeIndex(index);
  };

  return (
    <div className="resumes-dashboard-container">
      <div className="resumes-dashboard-card">
        <h2 className="resumes-dashboard-title">Your Resumes</h2>

        <div className="resumes-dashboard-actions">
          <Link to="/createresume">
            <button className="resumes-dashboard-create-button">
              Create New Resume
            </button>
          </Link>
        </div>

        <div className="resumes-dashboard-list">
          {resumes.length > 0 ? (
            resumes.map((resume, index) => (
              <div
                key={index}
                className={`resumes-dashboard-item ${
                  selectedResumeIndex === index
                    ? "resumes-dashboard-selected"
                    : ""
                }`}
                onClick={() => handleSelectResume(index)}
              >
                <div className="resumes-dashboard-label">
                  <h3 className="resumes-dashboard-header">
                    {resume.name || "No Name"} {resume.surname || "No Surname"}
                  </h3>
                  <p className="resumes-dashboard-profession">
                    {resume.profession || "No Profession"}
                  </p>
                  <p className="resumes-dashboard-skills">
                    Skills:{" "}
                    {Array.isArray(resume.skills)
                      ? resume.skills.join(", ")
                      : "No skills available"}
                  </p>
                </div>

                <Link to={`/viewresume/${index}`}>
                  <button className="resumes-dashboard-view-button">
                    View Selected Resume
                  </button>
                </Link>
              </div>
            ))
          ) : (
            <p className="resumes-dashboard-empty">No resumes found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowResumes;
