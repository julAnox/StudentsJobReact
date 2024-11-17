import React from "react";
import { Link } from "react-router-dom";
import "./SummaryPostBanner.css";

const SummaryPostBanner = () => {
  return (
    <div className="summary-post-banner">
      <div className="summary-post-content">
        <h1 className="summary-post-title">Create a Resume on Student's Job</h1>
        <p className="summary-post-subtitle">
          Find your dream job by creating your resume with Student's Job — the
          best service for students and graduates.
        </p>
        <Link to="/summary/secondary">
          <button className="summary-post-button">Create Resume</button>
        </Link>
        <p className="summary-post-note">
          Student's Job helps young professionals quickly find suitable
          positions and start their careers.
        </p>
      </div>
    </div>
  );
};

export default SummaryPostBanner;
