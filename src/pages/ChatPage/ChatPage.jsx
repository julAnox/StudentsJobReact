import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ChatList from "../../components/ChatList/ChatList";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageList from "../../components/MessageList/MessageList";
import MessageInput from "../../components/MessageInput/MessageInput";
import ChatSettings from "../../components/ChatSettings/ChatSettings";
import "./ChatPage.css";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});

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

  useEffect(() => {
    if (selectedChat) {
      localStorage.setItem("messages", JSON.stringify(messages));
    }
  }, [messages, selectedChat]);

  return (
    <div className="chat-page">
      <Navbar />
      <ChatList
        chats={chats}
        selectedChat={selectedChat}
        handleChatSelect={handleChatSelect}
      />
      <div className="chat-main">
        {selectedChat && <ChatHeader selectedChat={selectedChat} />}
        {selectedChat ? (
          <MessageList messages={messages[selectedChat.id] || []} />
        ) : (
          <p className="chat-predict-text">Выберите чат для начала общения</p>
        )}
        {selectedChat && (
          <MessageInput
            message={message}
            setMessage={setMessage}
            handleSendMessage={handleSendMessage}
          />
        )}
      </div>
      <ChatSettings selectedChat={selectedChat} />
    </div>
  );
};

export default ChatPage;
