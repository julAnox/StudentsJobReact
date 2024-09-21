import React from "react";
import "./CityFilter.css";

const CityFilter = () => (
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
);

export default CityFilter;
