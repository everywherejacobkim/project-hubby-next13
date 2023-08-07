import React from "react";

enum Creator {
  Me = 0,
  Bot = 1,
}

interface MessageProps {
  text: string;
  from: Creator;
  key: number;
}

const ChatMessage = ({ text, from }: MessageProps) => {
  return (
    <div>
      {from == Creator.Me && (
        <div className="bg-primary/40 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <h2>You:</h2>
          <p className="text-black">{text}</p>
        </div>
      )}
      {from == Creator.Bot && (
        <div className="bg-primary-dark/40 p-4 rounded-lg flex gap-4 items-center whitespace-pre-wrap">
          <h2>Bot:</h2>
          <p className="text-black">{text}</p>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
