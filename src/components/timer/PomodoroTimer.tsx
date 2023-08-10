"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import pauseIcon from "../../../public/assets/icons/pause-timer.png";
import stopIcon from "../../../public/assets/icons/stop-timer.png";

const PomodoroTimer: React.FC<{
  initialPomodoro: number;
  initialBreak: number;
}> = ({ initialPomodoro, initialBreak }) => {
  const [time, setTime] = useState(initialPomodoro);
  const [breakTime, setBreakTime] = useState(initialBreak);
  const [isBreak, setIsBreak] = useState(false);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setIsBreak(true);
          setTime(breakTime);
          if (isBreak) {
            setCompletedCycles(completedCycles + 0.5);
          }
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [time, breakTime, isBreak, completedCycles, isRunning, isPaused]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    setIsRunning(false);
    setTime(initialPomodoro);
    setIsPaused(false);
  };

  return (
    <div className="w-full lg:-mb-8">
      <h1 className="font-semibold">Pomodoro Timer</h1>
      <div className="w-full h-[80%] flex flex-col gap-8 items-center justify-center">
        <div className="w-48 h-48">
          <div className="w-full h-full rounded-full border-8">
            <div className="text-lg mt-2 text-center px-4 pt-8">
              {isBreak ? "Break" : `#${completedCycles}`}
            </div>
            <div className="text-4xl font-bold text-center px-4 pt-2 pb-6">
              {formatTime(minutes)}:{formatTime(seconds)}
            </div>
          </div>
        </div>
        <div className="w-full -mb-6">
          {isRunning ? (
            <div className="flex justify-between">
              <button>
                <Image src={stopIcon} alt="stop-icon" onClick={handleStop} />
              </button>
              <button>
                <Image src={pauseIcon} alt="pause-icon" onClick={handlePause} />
              </button>
            </div>
          ) : (
            <button
              onClick={handleStartStop}
              className="w-full p-3 bg-primary-action text-white rounded-lg"
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PomodoroTimer;
