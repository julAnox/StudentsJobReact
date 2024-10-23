import React from "react";
import "./SearchSummaryBlock.css";
import ResumeAdditionBlock from "../ResumeAdditionBlock/ResumeAdditionBlock";

const SearchSummaryBlock = () => {
  return (
    <div className="search-summary-block">
      <div className="search-summary-content">
        <h1 className="summary-post-title">
          What kind of employees are there on Student's Job?
        </h1>

        <div className="search-bar-summary">
          <input
            type="text"
            placeholder="Search for employees..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>

        <div className="frequently-searched">
          <p className="summary-search-note">Frequently viewed:</p>
          <button className="search-tag">Programmer</button>
          <button className="search-tag">Operator</button>
          <button className="search-tag">Driver</button>
        </div>
      </div>
      <ResumeAdditionBlock />
    </div>
  );
};

export default SearchSummaryBlock;
