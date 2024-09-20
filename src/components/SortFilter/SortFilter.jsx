import React from "react";

const SortFilter = () => {
  return (
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
  );
};

export default SortFilter;
