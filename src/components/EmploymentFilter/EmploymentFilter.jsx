import React from "react";
import "./EmploymentFilter.css";

const EmploymentFilter = () => (
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
);

export default EmploymentFilter;
