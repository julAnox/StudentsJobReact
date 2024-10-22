import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CityFilter from "../../components/CityFilter/CityFilter";
import MetroFilter from "../../components/MetroFilter/MetroFilter";
import ExperienceFilter from "../../components/ExperienceFilter/ExperienceFilter";
import IncomeFilter from "../../components/IncomeFilter/IncomeFilter";
import EmploymentFilter from "../../components/EmploymentFilter/EmploymentFilter";
import ScheduleFilter from "../../components/ScheduleFilter/ScheduleFilter";
import ShowFilter from "../../components/ShowFilter/ShowFilter";
import OutputFilter from "../../components/OutputFilter/OutputFilter";
import SortFilter from "../../components/SortFilter/SortFilter";
import SideWorkFilter from "../../components/SideWorkFilter/SideWorkFilter";
import SearchFilter from "../../components/SearchFilter/SearchFilter";
import SummaryBlock from "../../components/SummaryBlock/SummaryBlock";
import "./SummaryPage.css";

const SummaryPage = () => {
  const [experience, setExperience] = useState(0);
  const [income, setIncome] = useState(200);

  const handleExperienceChange = (e) => setExperience(e.target.value);
  const handleIncomeChange = (e) => setIncome(e.target.value);
  return (
    <div>
      <Navbar />
      <div className="summary-content">
        <div className="filters">
          <SearchFilter />
          <CityFilter />
          <MetroFilter />
          <ExperienceFilter
            experience={experience}
            handleExperienceChange={handleExperienceChange}
          />
          <IncomeFilter
            income={income}
            handleIncomeChange={handleIncomeChange}
          />
          <EmploymentFilter />
          <ScheduleFilter />
          <SideWorkFilter />
          <SortFilter />
          <OutputFilter />
          <ShowFilter />
        </div>
        <div className="grid-of-summary">
          <SummaryBlock />
          <SummaryBlock />
          <SummaryBlock />
          <SummaryBlock />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SummaryPage;
