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

    setError("");
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      onSubmit(selectedFile);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setError("");
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
          error={error}
        />

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
