import React from "react";
import TodoList from "@/components/todoList/TodoList";
import CurrentDate from "@/components/date/Date";
import CurrentTime from "@/components/date/Time";
import CurrentWeather from "@/components/location/CurrentWeather";
import ChatGPT from "@/components/chatbot/ChatGpt";
import PomodoroTimer from "@/components/timer/PomodoroTimer";

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 h-full max-w-screen-xl">
      {/* add each components in the gird */}
      <div className="flex justify-center border p-5 box-content border-neutral-border">
        <CurrentTime />
      </div>
      <div className="flex justify-center border p-5 border-neutral-border">
        <CurrentDate />
      </div>
<<<<<<< HEAD
      <div className="flex py-5 justify-center col-span-2 border border-neutral-border">
        <CurrentWeather />
=======
      <div className="flex p-5 justify-left relative col-span-2 border border-neutral-border">
       <CurrentWeather />
>>>>>>> fc188696a32b0253df60cfb8bedbf3aac22e65ec
      </div>
      <div className="flex justify-center col-span-2 row-span-2 p-4 border border-neutral-border">
        <PomodoroTimer initialPomodoro={0.2 * 60} initialBreak={0.1 * 60} />
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border border-neutral-border">
        Notes
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border border-neutral-border">
        <ChatGPT />
      </div>
      <div className="flex justify-center col-span-2 row-span-3 p-4  border border-neutral-border">
        <TodoList />
      </div>
    </div>
  );
};

export default DashboardGrid;
