"use client";
import React, { useState } from "react";
import ChatWindow from "./ChatWindow";
import ChatHistory from "./ChatHistory";

const ChatGPT: React.FC = () => {
  const [showChat, setShowChat] = useState(false);

  const switchToChat = () => {
    setShowChat(true);
  };

  const switchToHistory = () => {
    setShowChat(false);
  };

  return (
    <>
      {showChat ? (
        <ChatWindow switchToHistory={switchToHistory} />
      ) : (
        <ChatHistory switchToChat={switchToChat} />
      )}
    </>
  );
};

export default ChatGPT;
