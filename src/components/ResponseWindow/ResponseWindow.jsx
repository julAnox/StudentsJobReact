import React, { useState, useEffect } from "react";
import FileUploadResume from "../FileUploadResume/FileUploadResume";
import CoverLetterInput from "../CoverLetterInput/CoverLetterInput";
import ResponseWindowActions from "../ResponseWindowActions/ResponseWindowActions";
import "./ResponseWindow.css";

const ResponseWindow = ({ isOpen, onClose, company, vacancy, onSubmit }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isOpen) {
      setIsOpenAnimation(true);
      setSelectedFile(null);
      setError("");
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!selectedFile) {
      setError("Please upload a resume before submitting.");
      return;
    }
    setError(""); // sbros error esli file est'
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      onSubmit(selectedFile);
    }, 1000);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError(""); // sbros pri vibore file
  };

  if (!isOpen) return null;

  return (
    <div
      className={`response-window-overlay ${isAnimating ? "animate-bg" : ""}`}
    >
      <div
        className={`response-window-content ${
          isAnimating ? "animate" : isOpenAnimation ? "animate-open" : ""
        }`}
      >
        <h2>
          You are applying for a vacancy {vacancy} at {company}
        </h2>

        <FileUploadResume
          selectedFile={selectedFile}
          onFileChange={handleFileChange}
        />

        {error && <p className="error-message">{error}</p>}

        <CoverLetterInput />

        <ResponseWindowActions
          onSubmit={handleSubmit}
          onClose={onClose}
          isAnimating={isAnimating}
          isSubmitDisabled={!selectedFile}
        />
      </div>
    </div>
  );
};

export default ResponseWindow;
