import React from "react";
import "./ChatHeader.css";

const ChatHeader = ({ selectedChat }) => {
  return (
    <div className="chat-header">
      <h2>{selectedChat.name}</h2>
      <p>{selectedChat.phone}</p>
    </div>
  );
};

export default ChatHeader;
