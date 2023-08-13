import React from "react";

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
    <div className="w-full h-fit justify-start">
      <h1 className="font-semibold">{daysToString()}</h1>
      <div className="mt-8">
        <span className="sm:text-3xl font-medium">{day_value} </span>
        <span className="sm:text-3xl font-medium">{months[month_value]}</span>
      </div>
    </div>
  );
};

export default CurrentDate;
