import React from "react";
import "./ChatSettings.css";

const ChatSettings = ({
  isOpen,
  selectedChat,
  chats,
  onClose,
  onOpenShareModal,
  onCloseChat,
  onDeleteChat,
  onClearChat,
}) => {
  if (!isOpen || !selectedChat) return null;

  return (
    <div className="chat-settings">
      <div className="settings-and-info">
        <div className="settings-content">
          <h4>User information</h4>
          <div className="settings-content-header">
            <h2>{selectedChat.name}</h2>
          </div>
          <p>{selectedChat.phone}</p>
        </div>

        <div className="contact-info">
          <p>
            <strong>Phone:</strong> {selectedChat.phone}
          </p>
          <p>
            <strong>About:</strong> HR
          </p>
          <p>
            <strong>User name:</strong> @{selectedChat.name}
          </p>
        </div>
      </div>

      <div className="settings-actions">
        <button onClick={onOpenShareModal}>Share contact</button>
        <button onClick={onClearChat}>Clear messages</button>
        <button onClick={onCloseChat}>Close chat</button>
        <button onClick={onDeleteChat}>Delete chat</button>
        <button className="block-btn">Block</button>
      </div>
    </div>
  );
};

export default ChatSettings;
