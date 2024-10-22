import React from "react";
import avasummary from "../../assets/summary.jpg";
import "./SummaryBlock.css";

const SummaryBlock = () => {
  return (
    <>
      <div className="summary-block">
        <img src={avasummary} alt="" className="ava-summary" />
        <h3 className="nickname-summary">Ulia Alenova</h3>
      </div>
    </>
  );
};

export default SummaryBlock;
