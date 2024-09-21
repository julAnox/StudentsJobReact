import React, { useState } from "react";
import "./ExperienceFilter.css";

const ExperienceFilter = () => {
  const [experience, setExperience] = useState(0);

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  return (
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
  );
};

export default ExperienceFilter;
