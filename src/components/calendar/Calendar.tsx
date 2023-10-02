"use client";
import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "./Calendar.css";

const Calendar = () => {
  const [contentHeight, setContentHeight] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      setContentHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const events = [
    { title: "Design meeting", date: "2023-10-03", color: "#FFDDB7" },
    { title: "Design meeting", date: "2023-10-09", color: "#FFDDB7" },
    { title: "Design meeting", date: "2023-10-17", color: "#FFDDB7" },
    { title: "Development meeting", date: "2023-10-13", color: "#D7E9B9" },
    { title: "Development meeting", date: "2023-10-26", color: "#D7E9B9" },
    { title: "Development meeting", date: "2023-10-30", color: "#D7E9B9" },
  ];

  return (
    <div className="bg-white p-7">
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height={contentHeight - 40}
      />
    </div>
  );
};

export default Calendar;
