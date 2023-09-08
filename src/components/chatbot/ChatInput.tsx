import React from "react";
import { BsSend } from "react-icons/bs";

const ChatInput = ({
  handleSubmit,
  value,
  setValue,
  isLoading,
  setIsLoading,
}: {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  value: string;
  setValue: (input: string) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}) => {
  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    []
  );

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        className="w-full border border-neutral-border p-3 rounded-lg mr-2"
      />
      <button className="bg-primary-action absolute right-3 mt-1.5 p-3 rounded-lg">
        <BsSend className="text-white" />
      </button>
    </form>
  );
};

export default ChatInput;
