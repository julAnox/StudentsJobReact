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
  const [isSubmitAttempted, setIsSubmitAttempted] = useState(false); // Состояние для отслеживания попыток отправки

  useEffect(() => {
    if (isOpen) {
      setIsOpenAnimation(true);
      setSelectedFile(null);
      setCoverLetter("");
      setError("");
      setIsSubmitAttempted(false); // Сбрасываем попытки отправки
    }
  }, [isOpen]);

  const handleSubmit = () => {
    console.log("Submit button clicked");
    setIsSubmitAttempted(true); // Отмечаем, что пользователь попытался отправить форму

    // Проверка на наличие резюме
    if (!selectedFile) {
      console.log("No resume selected");
      setError("Please upload a resume before submitting."); // Устанавливаем сообщение об ошибке
      return;
    }

    // Если резюме выбрано, отправляем форму
    setError(""); // Очистка ошибки при успешной отправке
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
      onSubmit(selectedFile);
    }, 1000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    if (file) {
      setError(""); // Очистка ошибки при выборе файла
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
          error={isSubmitAttempted && !selectedFile ? error : ""} // Отображение ошибки только под полем загрузки резюме
        />
        <CoverLetterInput
          onChange={handleCoverLetterChange}
          value={coverLetter}
        />
        <ResponseWindowActions
          onSubmit={handleSubmit}
          onClose={onClose}
          isAnimating={isAnimating}
          isSubmitDisabled={false} // Кнопка отправки всегда активна
        />
      </div>
    </div>
  );
};

export default ResponseWindow;
