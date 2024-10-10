import React, { useRef, useEffect } from "react";
import "./MessageList.css";

const MessageList = ({ messages }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="chat-messages">
      {messages.length > 0 ? (
        messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            <div className="message-text">{msg.text}</div>
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
