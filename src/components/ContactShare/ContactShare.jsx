import React from "react";
import "./ContactShare.css";

const ContactShare = ({ chats, selectedContact, onClose, onShare }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h4>Select a chat to send a contact:</h4>
        <ul className="chat-list-share">
          {chats.map((chat) => (
            <li key={chat.id} onClick={() => onShare(chat)}>
              <div className="chat-avatar">{chat.name[0]}</div>
              {chat.name}
            </li>
          ))}
        </ul>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ContactShare;
