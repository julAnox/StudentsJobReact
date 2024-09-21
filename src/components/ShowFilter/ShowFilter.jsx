import React from "react";
import "./ShowFilter.css";

const ShowFilter = () => {
  return (
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
  );
};

export default ShowFilter;
