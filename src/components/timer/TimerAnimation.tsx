import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const TimerAnimation = ({
  duration,
  children,
}: {
  duration: number;
  children: any;
}) => {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors="#A30000"
      strokeWidth={10}
    >
      {children}
    </CountdownCircleTimer>
  );
};

export default TimerAnimation;
