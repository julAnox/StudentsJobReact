import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import "./VacanciesPage.css";

const VacanciesPage = () => {
  return (
    <div className="vacancies-all">
      <Navbar />
      <div className="vac-main-content">
        <Link to="/vacancies/secondary">
          <button>Go to Secondary Page</button>
        </Link>
        <Slider />
      </div>
      <Footer />
    </div>
  );
};

export default VacanciesPage;
