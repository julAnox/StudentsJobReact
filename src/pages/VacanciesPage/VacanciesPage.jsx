import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./VacanciesPage.css";

const VacanciesPage = () => {
  const [experience, setExperience] = useState(0);
  const [income, setIncome] = useState(200);

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="vacancies-content">
        <div className="filters">
          <form className="vac-form">
            <input
              type="text"
              placeholder="Search here..."
              class="search-vac"
            />
          </form>
          <div className="city">
            <ul>
              City:
              <li>
                <input type="checkbox" /> Minsk
              </li>
              <li>
                <input type="checkbox" /> Gomel
              </li>
              <li>
                <input type="checkbox" /> Brest
              </li>
              <li>
                <input type="checkbox" /> Grodno
              </li>
              <li>
                <input type="checkbox" /> Vitebsk
              </li>
              <li>
                <input type="checkbox" /> Mogilev
              </li>
            </ul>
          </div>

          <div className="metro">
            <label>Station:</label>
            <select>
              <option>No selection</option>
              <option>Uručje</option>
              <option>Borisovsky Trakt</option>
            </select>
          </div>

          <div className="exp_lvl">
            <label>Experience Level (in years):</label>
            <input
              type="range"
              id="experience"
              name="experience"
              min="0"
              max="15"
              step="0.5"
              value={experience}
              onChange={handleExperienceChange}
              style={{ "--val": `${(experience / 15) * 100}%` }}
            />
            <p>Selected: {experience} years</p>
          </div>

          <div className="income">
            <label>Income Level:</label>
            <input
              type="range"
              id="income"
              name="income"
              min="200"
              max="10000"
              step="100"
              value={income}
              onChange={handleIncomeChange}
              style={{ "--val": `${((income - 200) / (10000 - 200)) * 100}%` }}
            />
            <p>Selected: {income} BYN</p>
          </div>

          <div className="employment">
            <label>Employment Type:</label>
            <select id="employment">
              <option>No selection</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="freelance">Freelance</option>
              <option value="internship">Internship</option>
            </select>
          </div>

          <div className="schedule">
            <label>Work Schedule:</label>
            <select id="schedule">
              <option>No selection</option>
              <option value="full-day">Full Day</option>
              <option value="shift">Shift Work</option>
              <option value="flexible">Flexible Schedule</option>
              <option value="remote">Remote Work</option>
            </select>
          </div>

          <div className="podrabotka">
            <ul>
              Side Work:
              <li>
                <input type="checkbox" /> One-time task
              </li>
              <li>
                <input type="checkbox" /> Part-time
              </li>
              <li>
                <input type="checkbox" /> At least 4 hours a day
              </li>
              <li>
                <input type="checkbox" /> On weekends
              </li>
              <li>
                <input type="checkbox" /> In the evenings
              </li>
            </ul>
          </div>

          <div className="sort">
            <ul>
              Sort by:
              <li>
                <input type="radio" name="sort" /> By relevance
              </li>
              <li>
                <input type="radio" name="sort" /> By date modified
              </li>
              <li>
                <input type="radio" name="sort" /> By descending salary
              </li>
              <li>
                <input type="radio" name="sort" /> By ascending salary
              </li>
            </ul>
          </div>

          <div className="output">
            <ul>
              Show:
              <li>
                <input type="radio" name="output" /> All time
              </li>
              <li>
                <input type="radio" name="output" /> This month
              </li>
              <li>
                <input type="radio" name="output" /> This week
              </li>
              <li>
                <input type="radio" name="output" /> Last three days
              </li>
              <li>
                <input type="radio" name="output" /> Last day
              </li>
            </ul>
          </div>

          <div className="show">
            <ul>
              Show on page:
              <li>
                <input type="radio" name="show" /> 20 vacancies
              </li>
              <li>
                <input type="radio" name="show" /> 50 vacancies
              </li>
              <li>
                <input type="radio" name="show" /> 100 vacancies
              </li>
            </ul>
          </div>
        </div>
        <div className="grid-of-vacancies">
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
          <div className="vacancy-block">
            <h3 className="vacancy-title">Software Engineer</h3>
            <p className="vacancy-description">
              Develop and maintain web applications.
            </p>
            <div className="vacancy-info">
              Location: Minsk | Salary: 1500 BYN
            </div>
            <div className="vacancy-action">
              <button className="vacancy-button">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VacanciesPage;
