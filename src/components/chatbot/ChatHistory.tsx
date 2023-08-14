"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import deleteIcon from "../../../public/assets/icons/trash.png";
import nextIcon from "../../../public/assets/icons/next.png";
import dialogueIcon from "../../../public/assets/icons/dialogue.png";

interface HistoryProps {
  switchToChat: () => void;
}

interface ListItem {
  id: number;
  title: string;
}

const mockData: ListItem[] = [
  { id: 1, title: "Why is the sky blue?" },
  { id: 2, title: "Why is the sea deep?" },
  { id: 3, title: "Why is the air invisible?" },
];

const ChatHistory: React.FC<HistoryProps> = ({ switchToChat }) => {
  const [items, setItems] = useState<ListItem[]>(mockData);

  const handleDelete = (id: number) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div className="relative flex flex-col w-full">
      <h1 className="mb-4 font-semibold">Chatgpt</h1>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between mb-2 py-3 border-b"
          >
            <div className="flex items-center gap-4">
              <Image
                src={dialogueIcon}
                className="text-xl"
                alt="dialogue-icon"
              />
              <span className="mr-2">{item.title}</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleDelete(item.id)}
                className="px-2 py-1"
              >
                <Image src={deleteIcon} className="text-xl" alt="delete-icon" />
              </button>
              <Link href="/chatbot">
                <Image src={nextIcon} className="text-xl" alt="next-icon" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 w-full">
        <button
          onClick={switchToChat}
          className="w-full h-12 py-1 bg-primary-action text-white rounded-lg"
        >
          New chat
        </button>
      </div>
    </div>
  );
};

export default ChatHistory;
