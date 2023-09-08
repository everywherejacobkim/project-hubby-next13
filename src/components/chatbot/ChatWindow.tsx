"use client";
import React, { useState } from "react";
import Image from "next/image";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatBot from "../../../public/assets/images/svg/chat-bot.svg";
import ChatBotText from "../../../public/assets/images/svg/chat-bot-hello.svg";
import newScreenIcon from "../../../public/assets/icons/newscreen.png";
import { streamReader } from "openai-edge-stream";

interface Conversation {
  role: string;
  content: string;
}

const ChatWindow = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Message text: ", value);
    const response = await fetch(`/api/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: value }),
    });

    const data = response.data;
    if (!data) {
      return;
    }
    const reader = data.getReader();
    await streamReader(reader, (message) => {
      console.log("Message: ", message);
    });
    setIsLoading(false);
  };

  return (
    <div className="relative w-full p-1 bg-white max-h-screen overflow-x-hidden">
      <div className="flex justify-between pr-1">
        <h1 className="font-semibold">ChatGPT</h1>
        <Image src={newScreenIcon} alt="screen-icon" />
      </div>
      <div className="p-4">
        {!isLoading ? (
          <div className="flex flex-col items-center gap-4 pt-4">
            <Image src={ChatBot} alt="chat-bot-icon" />
            <Image src={ChatBotText} alt="chat-bot-text-icon" />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 pt-4">Hello</div>
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <ChatInput
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
