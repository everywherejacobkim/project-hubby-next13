"use client";
import { useState, useEffect } from "react";
import useCurrentUser from "@/lib/hooks/useCurrentUser";
import { useSession } from 'next-auth/react';
import axios from "axios";

const ListingMail =()=>{
    const { data: currentUser } = useCurrentUser();
    const [loginUser, setLoginUser] = useState("")
    const { data: session } = useSession();

    useEffect(() => {
        setLoginUser(currentUser?.data?.id);
        
      }, [currentUser]);
  console.log("User Id" + loginUser)

  const [messages, setMessages] = useState([]);
  const userId = loginUser; // Replace with the actual user ID

  useEffect(() => {
    // Fetch and set Gmail messages
    const fetchGmailMessages = async () => {
      try {
        // Replace 'your_access_token_here' with the actual access token obtained via OAuth 2.0
        const accessToken = session?.user?.accessToken;

        const response = await axios.get(
          `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        setMessages(response.data.messages);
        console.log("gmail messsage" + messages)
      } catch (error) {
        console.error("Error fetching Gmail messages:", error);
      }
    };

    fetchGmailMessages();
  }, [userId]);


  return (
    <div>
      <h2>Gmail Messages</h2>
      <ul>
        {/* <h2>Access Token:{accessToken}</h2> */}
        {/* {messages.map((message) => (
          <li key={message.id}>{message.subject}</li>
          // Replace 'subject' with the appropriate field you want to display
        ))} */}
      </ul>
    </div>
  );
}


export default ListingMail;