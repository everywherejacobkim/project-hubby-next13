import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const PomodoroTimer: React.FC = () => {
  const [time, setTime] = useState(15 * 60); // 15 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        setIsBreak(true);
        setTime(breakTime);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [time, breakTime]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="border-2 rounded-full p-10 mb-5"
      >
        <div className="text-4xl font-bold">
          {formatTime(minutes)}:{formatTime(seconds)}
        </div>
        <div className="text-lg mt-2">
          {isBreak ? "Break Time" : "Pomodoro Session"}
        </div>
      </motion.div>
    </div>
  );
};

export default PomodoroTimer;
