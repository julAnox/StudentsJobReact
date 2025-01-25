import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Building2,
  ArrowRight,
  Search,
  Award,
  Globe2,
  Rocket,
  Code,
  Target,
} from "lucide-react";
import "./VacanciesPage.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const VacanciesPage = () => {
  const categories = [
    {
      title: "Software Engineering",
      count: 15,
      icon: <Code className="w-6 h-6" />,
      description: "Build the future of technology",
    },
    {
      title: "Product Development",
      count: 8,
      icon: <Rocket className="w-6 h-6" />,
      description: "Shape tomorrow's solutions",
    },
    {
      title: "Design & UX",
      count: 6,
      icon: <Target className="w-6 h-6" />,
      description: "Create exceptional experiences",
    },
    {
      title: "Business Strategy",
      count: 7,
      icon: <Building2 className="w-6 h-6" />,
      description: "Drive company growth",
    },
  ];

  return (
    <div className="vacancies-container">
      <Navbar />
      <section className="hero">
        <div className="hero-content">
          <h1>Shape the Future with Us</h1>
          <p>
            Join a team of innovators, dreamers, and doers who are transforming
            industries worldwide
          </p>
          <div className="search-box">
            <Search className="search-icon" />
            <input type="text" placeholder="Search your dream role..." />
            <button className="search-button">Explore Roles</button>
          </div>
        </div>
      </section>

      <section className="why-join-us">
        <h2>Why Choose Us?</h2>
        <div className="benefits-grid">
          <div className="benefit-card">
            <Award className="benefit-icon" />
            <h3>Industry-Leading Benefits</h3>
            <p>
              Comprehensive healthcare, competitive salary, stock options, and
              flexible PTO
            </p>
          </div>
          <div className="benefit-card">
            <Users className="benefit-icon" />
            <h3>Exceptional Culture</h3>
            <p>
              Work with talented individuals in an environment that promotes
              innovation and creativity
            </p>
          </div>
          <div className="benefit-card">
            <Globe2 className="benefit-icon" />
            <h3>Global Opportunities</h3>
            <p>
              Remote-first company with teams and opportunities across the globe
            </p>
          </div>
        </div>
      </section>

      <section className="categories-section">
        <h2>Discover Your Path</h2>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              to="/vacancies/secondary"
              key={index}
              className="category-card"
            >
              <div className="category-icon">{category.icon}</div>
              <div className="category-info">
                <h3>{category.title}</h3>
                <p className="category-description">{category.description}</p>
                <span className="position-count">
                  {category.count} open positions
                </span>
              </div>
              <ArrowRight className="arrow-icon" />
            </Link>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Make an Impact?</h2>
          <p>
            Join our innovative team and help shape the future of technology.
            We're always looking for exceptional talent.
          </p>
          <Link to="/vacancies/secondary" className="cta-button">
            View All Opportunities
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VacanciesPage;
