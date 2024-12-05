import React from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import "./SummaryBackground.css";

const SummaryBackground = () => {
  const navigate = useNavigate();

  const handleSummarySecondary = () => {
    navigate("/summary/secondary");
  };
  return (
    <section className="summary-pg-name-pic">
      <div className="summary-pg-name-hero-content summary-pg-name-container">
        <h1>Create Your Future with Student's Job</h1>
        <p>
          Find your dream job by creating your resume with Student's Job — the
          leading platform for students and graduates.
        </p>

        <div className="summary-pg-name-search-container">
          <div className="summary-pg-name-search-box">
            <Search className="summary-pg-name-search-icon" />
            <input type="text" placeholder="Search for your dream job..." />
            <button
              className="summary-pg-name-btn-primary"
              onClick={handleSummarySecondary}
            >
              Search
            </button>
          </div>

          <div className="summary-pg-name-popular-searches">
            <span>Popular searches:</span>
            <div className="summary-pg-name-search-tags">
              <button>Software Developer</button>
              <button>Data Analyst</button>
              <button>UI/UX Designer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummaryBackground;
