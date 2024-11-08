import React, { useState } from "react";
import "./ChatList.css";

const ChatList = ({ chats, selectedChat, handleChatSelect }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="chat-list">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search here"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className="material-symbols-outlined">search</span>
      </div>
      {filteredChats.map((chat) => (
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
