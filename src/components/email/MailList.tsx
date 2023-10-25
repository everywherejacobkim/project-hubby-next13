"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import useCurrentUser from "@/lib/hooks/useCurrentUser";
import axios from "axios";
import Image from "next/image";
import userProfile from "../../../public/assets/images/png/portrait.jpg"

interface Message {
  id: string;
  snippet: string;
}

const MailList = () => {
  const { data: session } = useSession();
  const { data: currentUser } = useCurrentUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loginUser, setLoginUser] = useState("")

  // useEffect(() => {
  //   setLoginUser(session?.user?.id);
    
  // }, [session]);

    // console.log("User Id" + currentUser.data.id)
    // const userId = currentUser.data.id; 
   
  
  // useEffect(() => {
    // const fetchMessages = async () => {
    //   if (!session) {
    //     console.error("User is not authenticated");
    //     return;
    //   }

    //   const accessToken = session?.user?.accessToken;
    //   // console.log("Front access token" + accessToken)
    //   if (!accessToken) {
    //     console.error("Access token not found");
    //     return;
    //   }

  //     try {
  //       const scopes = "https://www.googleapis.com/auth/gmail.readonly";

  //    const response = await fetch(
  //         `https://gmail.googleapis.com/gmail/v1/users/${loginUser}/messages`,
  //         {
  //           method: "GET",
  //           headers: new Headers({
  //             Authorization: `Bearer ${accessToken}`,
  //           }),
  //         }
  //       );

  //       if (!response.ok) {
  //         console.error("Failed to fetch messages from Gmail API");
  //         return;
  //       }

  //       const data = await response.json();
  //       setMessages(data.messages);
  //     } catch (error) {
  //       console.error("Failed to fetch messages from Gmail API");
  //     }
  //   };

  //   fetchMessages();
  // }, [session]);
    
  // const fetchGmailMessages = async () => {

    
  //       try {

  //         const scopes = "https://www.googleapis.com/auth/gmail.labels";
  //         // Replace 'your_access_token_here' with the actual access token obtained via OAuth 2.0
  //         const accessToken = session?.user?.accessToken;
  //         console.log("Front access token" + accessToken)
  //         const response = await axios.get(
  //           `https://gmail.googleapis.com/gmail/v1/users/${userId}/messages`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${accessToken}`,
  //             },
  //           }
  //         );
  
  //         setMessages(response.data.messages);
  //         console.log("gmail messsage" + messages)
  //       } catch (error) {
  //         console.error("Error fetching Gmail messages:", error);
  //       }
  //     };
  
  //     fetchGmailMessages();
  //   }, [userId]);

    const mailLists = [
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
      {name:'Linda', content:'Promo expires on October 23, 2023 11:59 timezone. Promo valid for 40% off (up to max $20 off) orders of $25 or more (before taxes and fees), from select stores in the Convenience section of the Uber Eats app. Discount available on your next orders only. Valid only for those who received it directly from Uber. Taxes and fees still apply. Terms are subject to change. Pickup orders excluded. Other exclusions may apply (e.g., alcohol orders). See the Uber Eats app for details.', img:'/../../../public/assets/images/png/portrait.jpg', title:'Hey! How are you doing?', createdAt: 20231023},
    ]

  return (
    <div className="bg-white p-7">
      {/* {messages.length > 0 ? (
        messages.map((message) => <div key={message.id}>hello</div>)
      ) : (
        <div>No messages found</div>
      )} */}
      {mailLists.map((mail, index)=>
        <div key={index} className="shadow-md flex rounded-xl mx-10 mb-4">
          <div className="flex">
            <Image src={mail.img} alt="mail image" width={50} height={50} />
            <h5 className="font-semibold">{mail.name}</h5>
          </div>
          <div className=" pl-24 ">
            <h5 className="font-semibold">{mail.title}</h5>
            {mail.content.length > 250 ? `${mail.content.substring(0,250)}...` :
            <p>{mail.content}</p>
           }
           
          </div>
        </div>
      )}

    </div>
  );
};

export default MailList;
