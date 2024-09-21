import React from "react";
import "./MetroFilter.css";

const MetroFilter = () => (
  <div className="metro">
    <label>Station:</label>
    <select>
      <option>No selection</option>
      <option>Uručje</option>
      <option>Borisovsky Trakt</option>
    </select>
  </div>
);

export default MetroFilter;
