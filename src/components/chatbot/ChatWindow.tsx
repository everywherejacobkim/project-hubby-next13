"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import backIcon from "../../../public/assets/icons/back.png";
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
      <div className="flex justify-between">
        <h1 className="font-semibold">ChatGPT</h1>
        <Image src={newScreenIcon} alt="screen-icon" />
      </div>
      <button onClick={switchToHistory} className="my-3.5 mx-2">
        <Image src={backIcon} alt="back-icon" />
      </button>
      <hr className="custom-divider-2" />
      <div className="p-4">
        {messages.map((msg: MessageProps) => (
          <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
        ))}
      </div>
      <div className="absolute bottom-0 w-full py-4 pr-2">
        <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatWindow;
