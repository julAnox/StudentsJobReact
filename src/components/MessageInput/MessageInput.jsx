import React from "react";
import "./MessageInput.css";

const MessageInput = ({ message, setMessage, handleSendMessage }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage} disabled={!message.trim()}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
