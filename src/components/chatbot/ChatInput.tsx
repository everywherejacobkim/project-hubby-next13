'use client';
import React, { useState } from "react";
import { BsSend } from "react-icons/bs";

interface InputProps {
  onSend: (text: string) => void;
  disabled: boolean;
}

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

export default ChatInput;
