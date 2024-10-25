import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FooterSummary from "../../components/FooterSummary/FooterSummary";
import SummaryPostBanner from "../../components/SummaryPostBanner/SummaryPostBanner";
import SearchSummaryBlock from "../../components/SearchSummaryBlock/SearchSummaryBlock";
import ResumeHighlight from "../../components/ResumeHighlight/ResumeHighlight";
import CandidateDetails from "../../components/CandidateDetails/CandidateDetails";
import AnimatedTower from "../../components/AnimatedTower/AnimatedTower";

import "./SummaryPage.css";

const SummaryPage = () => {
  return (
    <div>
      <Navbar />
      <div className="summary-content">
        <SummaryPostBanner />
        <SearchSummaryBlock />
        <AnimatedTower /> {/*+stepstextcontent */}
        {/*+stepstextcontent */}
        <ResumeHighlight />
        <CandidateDetails />
      </div>
      <FooterSummary />
    </div>
  );
};

export default SummaryPage;
