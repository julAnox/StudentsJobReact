import React from "react";

const OutputFilter = () => {
  return (
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
  );
};

export default OutputFilter;
