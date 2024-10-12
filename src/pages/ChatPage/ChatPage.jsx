import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import ChatList from "../../components/ChatList/ChatList";
import ChatHeader from "../../components/ChatHeader/ChatHeader";
import MessageList from "../../components/MessageList/MessageList";
import MessageInput from "../../components/MessageInput/MessageInput";
import ChatSettings from "../../components/ChatSettings/ChatSettings";
import ContactShare from "../../components/ContactShare/ContactShare";
import "./ChatPage.css";

const ChatPage = () => {
  const [selectedChat, setSelectedChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState({});
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const savedMessages = localStorage.getItem("messages");
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }

    const savedChats = localStorage.getItem("chats");
    if (savedChats) {
      setChats(JSON.parse(savedChats));
    }
  }, []);

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMessage("");
    setIsSettingsOpen(false);
  };

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
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

  const handleShareContact = (recipientChat) => {
    const contactInfo = `Contact: ${selectedChat.name}, Phone: ${selectedChat.phone}`;
    setMessages((prevMessages) => ({
      ...prevMessages,
      [recipientChat.id]: [
        ...(prevMessages[recipientChat.id] || []),
        {
          text: contactInfo,
          sender: "me",
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ],
    }));
    setIsShareModalOpen(false);
  };

  const handleClearChat = () => {
    if (selectedChat) {
      setMessages((prevMessages) => {
        const newMessages = { ...prevMessages };
        delete newMessages[selectedChat.id];
        localStorage.setItem("messages", JSON.stringify(newMessages));
        return newMessages;
      });
    }
  };

  const handleCloseChat = () => {
    setSelectedChat(null);
  };

  useEffect(() => {
    localStorage.setItem("messages", JSON.stringify(messages));
  }, [messages]);

  const createChatFromLocalStorage = () => {
    const applicationData = localStorage.getItem("applicationData");
    if (applicationData) {
      const { company, vacancy } = JSON.parse(applicationData);

      if (
        !chats.find((chat) => chat.name === company && chat.vacancy === vacancy)
      ) {
        const newChat = {
          id: chats.length + 1,
          name: company,
          vacancy: vacancy,
          status: `Applied for ${vacancy}`,
          phone: "",
        };

        const updatedChats = [...chats, newChat];
        setChats(updatedChats);
        localStorage.setItem("chats", JSON.stringify(updatedChats));
      }
    }
  };

  useEffect(() => {
    createChatFromLocalStorage();
  }, []);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const closeSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="chat-page">
      <Navbar />
      <ChatList
        chats={chats}
        selectedChat={selectedChat}
        handleChatSelect={handleChatSelect}
      />
      <div className={`chat-main ${isSettingsOpen ? "with-settings" : ""}`}>
        {selectedChat && (
          <ChatHeader
            selectedChat={selectedChat}
            onSettingsClick={toggleSettings}
            isSettingsOpen={isSettingsOpen}
          />
        )}
        {selectedChat ? (
          <>
            <MessageList messages={messages[selectedChat.id] || []} />
            <MessageInput
              message={message}
              setMessage={setMessage}
              handleSendMessage={handleSendMessage}
            />
          </>
        ) : (
          <p className="chat-predict-text">Select a chat to start chatting</p>
        )}
      </div>
      <ChatSettings
        isOpen={isSettingsOpen}
        selectedChat={selectedChat}
        chats={chats}
        onClose={closeSettings}
        onOpenShareModal={() => setIsShareModalOpen(true)}
        onClearChat={handleClearChat}
        onCloseChat={handleCloseChat}
      />
      {isShareModalOpen && (
        <ContactShare
          chats={chats}
          selectedContact={selectedChat}
          onClose={() => setIsShareModalOpen(false)}
          onShare={handleShareContact}
        />
      )}
    </div>
  );
};

export default ChatPage;
