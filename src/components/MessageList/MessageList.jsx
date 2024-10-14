import React, { useRef, useEffect } from "react";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleDownload = (fileName) => {
    const applicationData = JSON.parse(localStorage.getItem("applicationData"));
    const resumeContent =
      applicationData?.selectedFileName === fileName
        ? applicationData?.resumeContent || ""
        : "";

    const resumeBlob = new Blob([resumeContent], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    const resumeUrl = URL.createObjectURL(resumeBlob);
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(resumeUrl);
  };

  return (
    <div className="chat-messages">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-text">
              {msg.text}
              {msg.sender === "me" && msg.text.startsWith("Resume:") && (
                <div className="resume-container">
                  <span className="resume-text"></span>
                  <button
                    className="download-resume"
                    onClick={() =>
                      handleDownload(msg.text.replace("Resume: ", ""))
                    }
                  >
                    <span className="material-symbols-outlined">download</span>
                  </button>
                </div>
              )}
            </div>
            <div className="message-time">{msg.time}</div>
          </div>
        ))
      ) : (
        <p className="no-messages">Сообщений пока нет</p>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;
