"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import ChatBot from "../../../public/assets/images/svg/chat-bot.svg";
import ChatBotText from "../../../public/assets/images/svg/chat-bot-hello.svg";
import newScreenIcon from "../../../public/assets/icons/newscreen.png";

interface ChatProps {
  switchToHistory: () => void;
}

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

const ChatWindow: React.FC<ChatProps> = ({ switchToHistory }) => {
  const [messages, setMessages] = useState<MessageProps[]>([]);
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef<MessageProps[]>([]);

  const callApi = async (input: string) => {
    setLoading(true);

    const myMessage: MessageProps = {
      text: input,
      from: Creator.Me,
      key: new Date().getTime(),
    };

    setMessages([...messagesRef.current, myMessage]);

    const response = await fetch("/api/chat/generate-response", {
      method: "POST",
      body: JSON.stringify({ prompt: input }),
    }).then((response) => response.json());
    setLoading(false);

    if (response.text) {
      const botMessage: MessageProps = {
        text: response.text,
        from: Creator.Bot,
        key: new Date().getTime(),
      };
      setMessages([...messagesRef.current, botMessage]);
    } else {
      console.log("Error");
    }
  };

  return (
    <div className="relative w-full p-1 bg-white max-h-screen overflow-x-hidden">
      <div className="flex justify-between pr-1">
        <h1 className="font-semibold">ChatGPT</h1>
        <Image src={newScreenIcon} alt="screen-icon" />
      </div>
      <div className="p-4">
        {loading ? (
          messages.map((msg: MessageProps) => (
            <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
          ))
        ) : (
          <div className="flex flex-col items-center gap-4 pt-4">
            <Image src={ChatBot} alt="chat-bot-icon" />
            <Image src={ChatBotText} alt="chat-bot-text-icon" />
          </div>
        )}
      </div>
      <div className="absolute bottom-0 w-full">
        <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatWindow;
