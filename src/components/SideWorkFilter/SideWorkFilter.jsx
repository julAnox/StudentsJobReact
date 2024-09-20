import React from "react";

const SideWorkFilter = () => {
  return (
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
  );
};

export default SideWorkFilter;
