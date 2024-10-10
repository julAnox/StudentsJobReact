import React from "react";
import "./ChatSettings.css";

const ChatSettings = ({ selectedChat }) => {
  return (
    <div className="chat-settings">
      {selectedChat && (
        <div className="settings-content">
          <h4>Информация</h4>
          <div className="settings-content-header">
            <h2>{selectedChat.name}</h2>
          </div>
          <p>{selectedChat.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ChatSettings;
