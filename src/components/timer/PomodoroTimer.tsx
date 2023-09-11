"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTimerCycleStore } from "@/lib/stores/TimerCycle";
import pauseIcon from "../../../public/assets/icons/pause-timer.png";
import stopIcon from "../../../public/assets/icons/stop-timer.png";

const PomodoroTimer: React.FC<{
  initialPomodoro: number;
  initialBreak: number;
}> = ({ initialPomodoro, initialBreak }) => {
  const [time, setTime] = useState(initialPomodoro);
  const [breakTime, setBreakTime] = useState(initialBreak);
  const [isBreak, setIsBreak] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const { completedCycles, setCompletedCycles }: any = useTimerCycleStore(); //zustand

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isRunning && !isPaused) {
      interval = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        } else {
          setIsBreak(!isBreak);
          if (isBreak) {
            setCompletedCycles(completedCycles + 1);
          }
          setTime(isBreak ? initialPomodoro : breakTime);
        }
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [
    time,
    breakTime,
    isBreak,
    completedCycles,
    isRunning,
    isPaused,
    initialPomodoro,
    setCompletedCycles,
  ]);

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
    <div className="w-full flex flex-col justify-between">
      <h1 className="font-semibold text-white mb-3">Pomodoro Timer</h1>
      <div className="w-full flex flex-col items-center justify-center -mt-4">
        <div className="w-48 h-48">
          <div className="w-full h-full rounded-full border-8">
            <div className="text-4xl font-bold text-center px-4 pt-14 text-white">
              {formatTime(minutes)}:{formatTime(seconds)}
            </div>
            <div className="text-lg mt-2 text-center px-4 text-white">
              {isBreak
                ? "Break"
                : completedCycles === 0
                ? "Focus"
                : `#${completedCycles}`}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        {isRunning ? (
          <div className="flex h-12 justify-between px-6">
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
            className="w-full h-12 bg-white text-primary-action rounded-lg text-lg"
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
};

export default PomodoroTimer;
