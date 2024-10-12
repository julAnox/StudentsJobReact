import React, { useState, useEffect } from "react";
import FileUploadResume from "../FileUploadResume/FileUploadResume";
import CoverLetterInput from "../CoverLetterInput/CoverLetterInput";
import ResponseWindowActions from "../ResponseWindowActions/ResponseWindowActions";
import "./ResponseWindow.css";

const ResponseWindow = ({ isOpen, onClose, company, vacancy, onSubmit }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpenAnimation, setIsOpenAnimation] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [coverLetter, setCoverLetter] = useState("");
  const [error, setError] = useState("");
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsOpenAnimation(true);
      setSelectedFile(null);
      setCoverLetter("");
      setError("");
      setIsSubmitAttempted(false);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    console.log("Submit button clicked");
    setIsSubmitAttempted(true);

    if (!selectedFile) {
      console.log("No resume selected");
      setError("Please upload a resume before submitting.");
      return;
    }

    setError("");
    setIsAnimating(true);

    console.log("Cover letter before saving:", coverLetter);

    const applicationData = {
      selectedFileName: selectedFile.name,
      coverLetter,
      company,
      vacancy,
    };

    localStorage.setItem("applicationData", JSON.stringify(applicationData));

    console.log("Data saved to localStorage:", applicationData);

    setTimeout(() => {
      setIsAnimating(false);
      onSubmit(selectedFile);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setError("");
    }
  };

  const handleCoverLetterChange = (e) => {
    setCoverLetter(e.target.value);
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
          error={isSubmitAttempted && !selectedFile ? error : ""}
        />
        <CoverLetterInput
          onChange={handleCoverLetterChange}
          value={coverLetter}
        />
        <ResponseWindowActions
          onSubmit={handleSubmit}
          onClose={onClose}
          isAnimating={isAnimating}
          isSubmitDisabled={false}
        />
      </div>
    </div>
  );
};

export default ResponseWindow;
