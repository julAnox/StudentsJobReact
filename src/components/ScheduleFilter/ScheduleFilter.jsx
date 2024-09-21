import React from "react";
import "./ScheduleFilter.css";

const ScheduleFilter = () => (
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
);

export default ScheduleFilter;
