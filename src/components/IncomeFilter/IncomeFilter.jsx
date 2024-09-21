import React, { useState } from "react";
import "./IncomeFilter.css";

const IncomeFilter = () => {
  const [income, setIncome] = useState(200);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  return (
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
  );
};

export default IncomeFilter;
