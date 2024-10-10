import React, { useState, useEffect, useRef } from "react";
import "./ChatPage.css";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Иван Иванович",
      status: "Входящий звонок",
      phone: "+7 958 100-32-91",
    },
    {
      id: 2,
      name: "Андрей Андреевич",
      status: "Вы: ок",
      phone: "+7 958 100-32-91",
    },
    {
      id: 3,
      name: "Дмитрий Нагиев",
      status: "Привет! У вас есть синие замшевые туфли?",
      phone: "+7 958 100-32-91",
    },
  ];

  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMessage("");
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const currentTime = new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setMessages((prevMessages) => ({
        ...prevMessages,
        [selectedChat.id]: [
          ...(prevMessages[selectedChat.id] || []),
          { text: message, sender: "me", time: currentTime },
        ],
      }));
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages[selectedChat?.id]]);

  useEffect(() => {
    if (selectedChat) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages]);

  return (
    <div className="chat-page">
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

      <div className="chat-main">
        {selectedChat && (
          <div className="chat-header">
            <h2>{selectedChat.name}</h2>
            <p>{selectedChat.phone}</p>
          </div>
        )}
        <div className="chat-messages">
          {selectedChat ? (
            messages[selectedChat.id]?.length > 0 ? (
              messages[selectedChat.id].map((msg, index) => (
                <div key={index} className={`message ${msg.sender}`}>
                  <div className="message-text">{msg.text}</div>
                  <div className="message-time">{msg.time}</div>
                </div>
              ))
            ) : (
              <p className="no-messages">Сообщений пока нет</p>
            )
          ) : (
            <p className="chat-predict-text">Выберите чат для начала общения</p>
          )}
          <div ref={messagesEndRef} />
        </div>
        {selectedChat && (
          <div className="input-container">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Введите сообщение..."
              aria-label="Введите сообщение"
            />
            <button onClick={handleSendMessage} disabled={!message.trim()}>
              Отправить
            </button>
          </div>
        )}
      </div>

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
    </div>
  );
};

export default ChatPage;
