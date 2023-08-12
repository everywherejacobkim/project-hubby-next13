"use client";
import { useEffect, useState } from "react";

const CurrentTime: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTime());
  const [isClient, setIsClient] = useState(false);

  function getCurrentTime(): string {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  }

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Searching time zone
  const options: Intl.DateTimeFormatOptions = {
    timeZoneName: "short",
  };

  const timeZone: string = new Intl.DateTimeFormat("en-US", options).format(
    new Date()
  );

  let splitTimeZone = timeZone.split(" ");
  console.log(splitTimeZone);

  return (
    <div className="box-content w-full">
      <h1 className="font-semibold">{splitTimeZone[1]}</h1>
      <div className="mt-24">
        {isClient ? (
          <h1 className="sm:text-3xl text-left font-medium"> {currentTime}</h1>
        ) : (
          "nothing"
        )}
      </div>
    </div>
  );
};

export default CurrentTime;
