import React from "react";
import "./ChatList.css";

const ChatList = ({ chats, selectedChat, handleChatSelect }) => {
  return (
    <div className="chat-list">
      <div className="search-bar">
        <input type="text" placeholder="Найти" />
      </div>
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat-item ${
            selectedChat?.id === chat.id ? "active" : ""
          }`}
          onClick={() => handleChatSelect(chat)}
        >
          <div className="chat-avatar">{chat.name[0]}</div>
          <div className="chat-info">
            <h4>{chat.name}</h4>
            <p>{chat.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
