'use client';
import React from "react";
import { useSession } from "next-auth/react";

const Calendar = () => {
  const { data: session } = useSession();

  return (
    <div className="p-4 w-full h-[750px]">
      <iframe
        src={`https://calendar.google.com/calendar/embed?src=${session?.user?.email}&ctz=America%2FVancouver`}
        width="800"
        height="600"
        frameborder="0"
        scrolling="no"
        className="w-full h-full"
      ></iframe>
    </div>
  );
};

export default Calendar;