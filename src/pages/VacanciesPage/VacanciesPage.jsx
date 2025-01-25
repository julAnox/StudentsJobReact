import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ParticlesBackground from "../../components/ParticlesBackground/ParticlesBackground";
import SummaryBackground from "../../components/SummaryBackground/SummaryBackground";
import SummaryStat from "../../components/SummaryStat/SummaryStat";
import SummaryFeatures from "../../components/SummaryFeatures/SummaryFeatures";
import SummarySteps from "../../components/SummarySteps/SummarySteps";
import SummaryJobsFeatures from "../../components/SummaryJobsFeatures/SummaryJobsFeatures";
import SummaryUploadResume from "../../components/SummaryUploadResume/SummaryUploadResume";
import SuccessStories from "../../components/SuccessStories/SuccessStories";
import SummaryBenefits from "../../components/SummaryBenefits/SummaryBenefits";
import "./VacanciesPage.css";

const VacanciesPage = () => {
  return (
    <div className="summary-page">
      <ParticlesBackground />
      <Navbar />
      <SummaryBackground />
      <SummaryStat />
      <SummaryFeatures />
      <SummarySteps />
      <SummaryJobsFeatures />
      <SummaryUploadResume />
      <SuccessStories />
      <SummaryBenefits />
      <Footer />
    </div>
  );
};

export default VacanciesPage;
