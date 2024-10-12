import React from "react";
import "./ChatHeader.css";

const ChatHeader = ({ selectedChat, onSettingsClick, isSettingsOpen }) => {
  return (
    <div className="chat-header">
      <div className="header-content">
        <h2>{selectedChat.name}</h2>
        <p>{selectedChat.phone}</p>
      </div>
      <div className="settings-btn">
        <button className="settings-btn" onClick={onSettingsClick}>
          <span className="material-symbols-outlined">
            {isSettingsOpen ? "close" : "tune"}{" "}
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
