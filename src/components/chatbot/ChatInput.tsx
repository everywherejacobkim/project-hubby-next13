import React from "react";
import { BsSend } from "react-icons/bs";

const ChatInput = ({
  handleSubmit,
  inputValue,
  setInputValue,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: (input: string) => void;
}) => {
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border border-neutral-border p-3 rounded-lg mr-2"
      />
      <button className="bg-primary-action absolute right-3 mt-1.5 p-3 rounded-lg">
        <BsSend className="text-white" />
      </button>
    </form>
  );
};

export default ChatInput;
