import React from "react";
import "./CoverLetterInput.css";

const CoverLetterInput = () => {
  const autoResize = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  return (
    <>
      <p className="cover-letter">Add a cover letter:</p>
      <textarea
        rows="1"
        onInput={autoResize}
        className="cover-letter-input"
        placeholder="Write your cover letter here..."
      ></textarea>
    </>
  );
};

export default CoverLetterInput;
