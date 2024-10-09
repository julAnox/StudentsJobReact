import React from "react";
import "./CoverLetterInput.css";

const CoverLetterInput = () => {
  return (
    <>
      <p className="cover-letter">Add a cover letter: </p>
      <textarea
        className="cover-letter-input"
        placeholder="Write your cover letter here..."
      ></textarea>
    </>
  );
};

export default CoverLetterInput;
