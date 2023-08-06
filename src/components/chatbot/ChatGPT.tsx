"use client";
import React, { useState, useRef } from "react";
import { BsSend } from "react-icons/bs";

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

interface InputProps {
  onSend: (text: string) => void;
  disabled: boolean;
}

const ChatMessage = ({ text, from }: MessageProps) => {
  return (
    <div>
      {from == Creator.Me && (
        <div className="bg-primary/40 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <h1>User:</h1>
          <p className="text-black">{text}</p>
        </div>
      )}
      {from == Creator.Bot && (
        <div className="bg-primary-dark/40 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <h1>Bot:</h1>
          <p className="text-black">{text}</p>
        </div>
      )}
    </div>
  );
};

const ChatInput = ({ onSend, disabled }: InputProps) => {
  const [Input, setInput] = useState("");

  const sendInput = () => {
    onSend(Input);
    setInput("");
  };

  const handleKeyEnter = (event: any) => {
    if (event.key === "Enter") {
      sendInput();
    }
  };

  return (
    <div className="flex">
      <input
        type="text"
        value={Input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyEnter(e)}
        disabled={disabled}
        className="w-full border border-neutral-border p-3 rounded-lg mr-2"
      />
      <button
        onClick={sendInput}
        disabled={disabled}
        className="bg-primary-action absolute right-5 mt-1.5 p-3 rounded-lg"
      >
        <BsSend className="text-white" />
      </button>
    </div>
  );
};

const ChatGPT: React.FC = () => {
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
    <div className="relative w-full p-2 mx-auto bg-white max-h-screen">
      <h1>ChatGPT</h1>
      <div className="p-4">
        {messages.map((msg: MessageProps) => (
          <ChatMessage key={msg.key} text={msg.text} from={msg.from} />
        ))}
      </div>
      <div className="absolute bottom-0 w-full py-4 px-2">
        <ChatInput onSend={(input) => callApi(input)} disabled={loading} />
      </div>
    </div>
  );
};

export default ChatGPT;
