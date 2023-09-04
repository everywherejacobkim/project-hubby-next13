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
      <ChatWindow switchToHistory={switchToHistory} />
    </>
  );
};

export default ChatGPT;
