import React from "react";
import Image from "next/image";
import calendar from "../../../public/assets/icons/calendar.png"

const CurrentDate: React.FC = () => {
  const now = new Date();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month_value = now.getMonth();
  const day_value = now.getDate();

  function daysToString() {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return daysOfWeek[now.getDay()];
  }

  return (
    <div className="w-full">
      <div className="flex gap-2 w-full justify-center">
        <span className="h-fit">
        <Image 
        src={calendar}
        alt="calendar icon" 
        width={20}
        height={20}
        className="object-fit pt-1"
        />
       </span>
        <span className="sm:text-xl font-medium">{months[month_value]}</span>
        <span className="sm:text-xl font-medium">{day_value} </span>
        <span className="text-neutral-light">|</span>
      </div>
    </div>
  );
};

export default CurrentDate;
