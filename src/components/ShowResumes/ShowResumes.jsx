import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ShowResumes.css";

function ShowResumes() {
  const [resumes, setResumes] = useState([]);
  const [selectedResumeIndex, setSelectedResumeIndex] = useState(null);

  useEffect(() => {
    const storedResumes = JSON.parse(localStorage.getItem("resumes")) || [];
    setResumes(storedResumes);

    const selectedResumeIndexFromStorage = localStorage.getItem(
      "selectedResumeIndex"
    );
    if (selectedResumeIndexFromStorage !== null) {
      setSelectedResumeIndex(parseInt(selectedResumeIndexFromStorage));
    }
  }, []);

  const handleSelectResume = (index) => {
    setSelectedResumeIndex(index);
    localStorage.setItem("selectedResumeIndex", index);
  };

  const handleDeleteResume = (index) => {
    const updatedResumes = resumes.filter((_, i) => i !== index);
    setResumes(updatedResumes);
    localStorage.setItem("resumes", JSON.stringify(updatedResumes));

    if (selectedResumeIndex === index) {
      setSelectedResumeIndex(null);
      localStorage.removeItem("selectedResumeIndex");
    }
  };

  return (
    <div className="resumes-dashboard-container">
      <div className="resumes-dashboard-card">
        <h2 className="resumes-dashboard-title">Your Resumes</h2>

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

                <div className="resumes-dashboard-buttons">
                  <Link to={`/viewresume/${index}`}>
                    <button className="resumes-dashboard-view-button">
                      View Resume
                    </button>
                  </Link>
                  <button
                    className="resumes-dashboard-delete-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteResume(index);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="resumes-dashboard-empty">No resumes found</p>
          )}
        </div>

        <div className="resumes-dashboard-actions">
          <Link to="/createresume">
            <button className="resumes-dashboard-create-button">
              Create New Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ShowResumes;
