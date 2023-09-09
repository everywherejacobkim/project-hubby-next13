"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import ChatInput from "./ChatInput";
import ChatBot from "../../../public/assets/images/svg/chat-bot.svg";
import ChatBotText from "../../../public/assets/images/svg/chat-bot-hello.svg";
import newScreenIcon from "../../../public/assets/icons/newscreen.png";
import aiIcon from "../../../public/assets/icons/chat-ai.png";
import copyIcon from "../../../public/assets/icons/chat-copy.png";

interface ChatMessage {
  type: "user" | "assistant";
  message: string;
}

const ChatWindow = () => {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setChatLog((prevChatLog: ChatMessage[]) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);
    ``;
    sendMessage(inputValue);
    setInputValue("");
  };

  const sendMessage = async (message: string) => {
    const url = "https://api.openai.com/v1/chat/completions";
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
    };
    const data = {
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: message }],
    };

    try {
      setIsLoading(true);
      const res = await axios.post(url, data, { headers: headers });
      setChatLog((prevChatLog: ChatMessage[]) => [
        ...prevChatLog,
        { type: "assistant", message: res.data.choices[0].message.content },
      ]);
    } catch (err) {
      console.log("Send Message error: ", err);
    }
  };

  // If there are no Axios calls after 1 minutes, change to bot image
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const resetLoading = () => {
      setIsLoading(false);
    };

    timeoutId = setTimeout(resetLoading, 60000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [chatLog]);

  const copyTextToClipboard = () => {
    const textToCopy = document.getElementById("textToCopy");

    if (textToCopy) {
      const text = textToCopy.innerText;

      navigator.clipboard
        .writeText(text)
        .then(() => {
          alert("Content copied!");
        })
        .catch((err) => {
          console.error("Copy failed: ", err);
        });
    }
  };

  return (
    <div className="relative w-full p-1 bg-white max-h-[400px] overflow-x-hidden">
      <div className="flex justify-between pr-1">
        <h1 className="font-semibold">ChatGPT</h1>
        <a href="https://chat.openai.com" target="_blank">
          <Image src={newScreenIcon} alt="screen-icon" />
        </a>
      </div>
      <div className="p-4">
        {isLoading ? (
          <div className="flex flex-col gap-4 pt-4">
            {chatLog.map((message, index) => (
              <div
                key={index}
                className={`flex  ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.type === "user" && (
                  <div className="bg-primary-action px-3 py-2 w-2/3 rounded-lg text-white">
                    {message.message}
                  </div>
                )}
                {message.type === "assistant" && (
                  <div className="flex flex-col gap-1">
                    <div>
                      <Image src={aiIcon} alt="ai-icon" />
                    </div>
                    <div
                      id="textToCopy"
                      className="bg-neutral-light px-3 py-2 w-2/3 rounded-lg"
                    >
                      {message.message}
                    </div>
                    <div className="flex gap-2">
                      <Image
                        src={copyIcon}
                        alt="copy-icon"
                        className="opacity-40 cursor-pointer"
                        onClick={copyTextToClipboard}
                      />
                      <p className="text-xs opacity-40">Copy</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 pt-4">
            <Image src={ChatBot} alt="chat-bot-icon" />
            <Image src={ChatBotText} alt="chat-bot-text-icon" />
          </div>
        )}
      </div>
      <div className="w-full pt-1">
        <ChatInput
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </div>
  );
};

export default ChatWindow;
