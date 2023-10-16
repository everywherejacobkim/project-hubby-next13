"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

interface Message {
  id: string;
  snippet: string;
}

const MailList = () => {
  const { data: session } = useSession();
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const fetchMessages = async () => {
      if (!session) {
        console.error("User is not authenticated");
        return;
      }

      const accessToken = session.user?.accessToken;

      if (!accessToken) {
        console.error("Access token not found");
        return;
      }

      try {
        const scopes = "https://www.googleapis.com/auth/gmail.readonly";

     const response = await fetch(
          `https://www.googleapis.com/gmail/v1/users/me/messages?maxResults=10`,
          {
            method: "GET",
            headers: new Headers({
              Authorization: `Bearer ${accessToken}`,
            }),
          }
        );

        if (!response.ok) {
          console.error("Failed to fetch messages from Gmail API");
          return;
        }

        const data = await response.json();
        setMessages(data.messages);
      } catch (error) {
        console.error("Failed to fetch messages from Gmail API");
      }
    };

    fetchMessages();
  }, [session]);

  return (
    <div className="bg-white p-7">
      {messages.length > 0 ? (
        messages.map((message) => <div key={message.id}>hello</div>)
      ) : (
        <div>No messages found</div>
      )}
    </div>
  );
};

export default MailList;
