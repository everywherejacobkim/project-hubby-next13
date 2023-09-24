import React from "react";
import TodoList from "@/components/todoList/TodoList";
import ChatWindow from "@/components/chatbot/ChatWindow";
import PomodoroTimer from "@/components/timer/PomodoroTimer";
import Notes from "@/components/note/Notes";
import PomodoroChart from "@/components/chart/PomodoroChart";

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 pt-0 w-full bg-primary dark:bg-neutral-dark">
      {/* add each components in the gird */}
      <div className="flex justify-center col-span-4 p-4 row-span-2 border shadow-xl rounded-3xl bg-white max-h-[400px] dark:bg-neutral">
        <PomodoroChart />
      </div>
      <div className="flex justify-center col-span-2 row-span-2 p-4 border shadow-xl rounded-3xl max-h-[400px] bg-primary-action">
        <PomodoroTimer initialPomodoro={0.2 * 60} initialBreak={0.1 * 60} />
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border shadow-xl rounded-3xl bg-white max-h-[400px] dark:bg-neutral">
        <Notes />
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border shadow-xl rounded-3xl bg-white max-h-[400px] dark:bg-neutral">
        <ChatWindow />
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border shadow-xl rounded-3xl bg-white max-h-[400px] dark:bg-neutral">
        <TodoList />
      </div>
    </div>
  );
};

export default DashboardGrid;
