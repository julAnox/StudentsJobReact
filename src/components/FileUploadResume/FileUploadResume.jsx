import React from "react";
import "./FileUploadResume.css";

const FileUploadResume = ({ selectedFile, onFileChange }) => {
  return (
    <div className="file-upload">
      <label htmlFor="resume-upload" className="file-upload-label">
        Upload your resume (Word or Text file):
      </label>
      <input
        type="file"
        id="resume-upload"
        className="file-upload-input"
        accept=".doc,.docx,.txt"
        onChange={onFileChange}
      />
    </div>
  );
};

export default FileUploadResume;
