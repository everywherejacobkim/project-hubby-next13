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
    <form className="flex relative mt-4" onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="w-full border border-neutral-border bg-neutral-light p-3 rounded-lg mr-2 dark:bg-neutral-dark dark:border-neutral"
      />
      <button className="bg-primary-action absolute right-4 mt-1.5 p-3 rounded">
        <BsSend className="text-white" />
      </button>
    </form>
  );
};

export default ChatInput;
