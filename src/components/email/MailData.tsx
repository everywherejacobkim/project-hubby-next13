import React, { useState, useEffect } from 'react';
import MailList from './MailList';
import Image from 'next/image';
import leftArrow from "../../../public/assets/images/png/left.png"
import rightArrow from "../../../public/assets/images/png/right.png"
import refresh from "../../../public/assets/images/png/refresh.png"


type Email = {
    name: string;
    content:string;
    img: string;
    title: string;
    createdAt: string
  }

  interface EmailListProps {
    emails: Email[];
  }

  const MailData:React.FC<EmailListProps>=({emails})=>{
    const [visibleEmails, setVisibleEmails] = useState(20);

  
  const loadMoreEmails = () => {
    setVisibleEmails(visibleEmails + 20);
  }

  return (
    <div className="p-7">
        <div>
          {/****s */}
          <div className="flex justify-between pb-11">
            <div className="flex">
              <select className="border-0 shadow-sm rounded-lg">
                <option selected value="sort by">sort by</option>
                <option value="all">All</option>
                <option value="read">Read</option>
                <option value="unread">Unread</option>
              </select>
              <Image 
                src={refresh}
                alt="refresh icon"
                objectFit="contain"
              />
            </div>
            
            <div>
              
                <span>{visibleEmails}</span>
              
              <button className="bg-white p-2.5 rounded-md">
                <Image 
                  src={leftArrow}
                  alt="refresh image"
                  width={8}
                  height={8}
                />
              </button>
              <button className="bg-white p-2.5 ml-2.5 rounded-md" onClick={loadMoreEmails}>
                <Image 
                src={rightArrow}
                width={8}
                height={8}
                alt="left arrow"
                />
              </button>
            </div>
          </div>
        </div>
      {/* {messages.length > 0 ? (
        messages.map((message) => <div key={message.id}>hello</div>)
      ) : (
        <div>No messages found</div>
      )} */}
      {emails.slice(0, visibleEmails).map((mail, index)=>
        <div key={index} className="shadow-md flex rounded-xl  mb-4 bg-white py-7">
          <div className="flex w-1/5">
            <Image src="/../../../public/assets/images/png/right.png" alt="mail image" width={50} height={50} />
            <h5 className="font-semibold">{mail.name}</h5>
          </div>
          <div className="w-3/5 ">
            <h5 className="font-semibold text-lg">{mail.title}</h5>
            {mail.content.length > 150 ? `${mail.content.substring(0,150)}...` :
            <p className="text-sm">{mail.content}</p>
           }
           
          </div>
          <div className="1/5">
           <p className="items-center">{mail.createdAt}</p>
          </div>
        </div>
      )}
      {/* {visibleEmails < emails.length && (
        <button onClick={loadMoreEmails}>Load More</button>
      )} */}

    </div>
  );
     }


export default MailData