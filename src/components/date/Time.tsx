"use client";
import { useEffect, useState } from "react";
import { ColorRing } from "react-loader-spinner";

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

  const options: Intl.DateTimeFormatOptions = {
    timeZoneName: "short",
  };

  const timeZone: string = new Intl.DateTimeFormat("en-US", options).format(
    new Date()
  );

  let splitTimeZone = timeZone.split(" ");
  // console.log(splitTimeZone);

  return (
    <div className="w-full h-fit">
      <h1 className="flex-start font-semibold">{splitTimeZone[1]}</h1>
      <div className="mt-8">
        {isClient ? (
          <p className="text-3xl tracking-wider text-center font-medium pr-1">
            {currentTime}
          </p>
        ) : (
          <div className="flex justify-center -mt-4">
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperClass="blocks-wrapper"
              colors={["#5b8ee1", "#395cea", "#4749a4", "#3e56a9", "#7181ec"]}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrentTime;
