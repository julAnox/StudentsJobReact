import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./SummaryUploadResume.css";

const SummaryUploadResume = () => {
  const navigate = useNavigate();

  const handleShowResumes = () => {
    navigate("/showresumes");
  };
  return (
    <section className="summary-pg-name-resume-highlight summary-pg-name-section">
      <div className="summary-pg-name-container">
        <div className="summary-pg-name-resume-content summary-pg-name-glass-effect">
          <div className="summary-pg-name-resume-text">
            <h2>Why Upload Your Resume?</h2>
            <p>
              A resume is your gateway to opportunities. Let employers discover
              your potential and find the perfect match for your skills.
            </p>
            <button
              className="summary-pg-name-btn-primary"
              onClick={handleShowResumes}
            >
              Upload Resume <ChevronRight size={20} />
            </button>
          </div>
          <div className="summary-pg-name-resume-icon">
            <FileText size={120} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryUploadResume;
