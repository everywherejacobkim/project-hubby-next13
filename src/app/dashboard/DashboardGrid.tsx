import React from "react";
import TodoList from "@/components/todoList/TodoList";
import ChatWindow from "@/components/chatbot/ChatWindow";
import PomodoroTimer from "@/components/timer/PomodoroTimer";
import Notes from "@/components/note/Notes";

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 pt-0 w-full h-full bg-primary">
      {/* add each components in the gird */}
      <div className="flex justify-center col-span-4 p-4 row-span-2 border shadow-xl rounded-3xl bg-white">
        For Graph
      </div>
      <div className="flex justify-center col-span-2 row-span-2 p-4 border shadow-xl rounded-3xl bg-primary-action">
        <PomodoroTimer initialPomodoro={25 * 60} initialBreak={5 * 60} />
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border shadow-xl rounded-3xl bg-white">
        <Notes />
      </div>
      <div className="flex justify-center col-span-2 row-span-4 p-4 border shadow-xl rounded-3xl bg-white">
        <ChatWindow />
      </div>
      <div className="flex justify-center col-span-2 row-span-3 p-4 border shadow-xl rounded-3xl	bg-white">
        <TodoList />
      </div>
    </div>
  );
};

export default DashboardGrid;
