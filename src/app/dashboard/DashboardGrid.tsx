import React from "react";
import TodoList from "@/components/todoList/TodoList";

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 h-full ">
      {/* add each components in the gird */}
      <div className="flex justify-center border border-neutral-border">
        Clock
      </div>
      <div className="flex justify-center border border-neutral-border">Date</div>
      <div className="flex justify-center col-span-2 border border-neutral-border">Weather</div>
      <div className="flex justify-center col-span-2 row-span-2 border border-neutral-border">Timer</div>
      <div className="flex justify-center col-span-2 row-span-4 border border-neutral-border">Notes</div>
      <div className="flex justify-center col-span-2 row-span-4 border border-neutral-border">ChatGPT</div>
      <div className="flex justify-center col-span-2 row-span-3 border border-neutral-border">
        <TodoList />
      </div>
    </div>
  );
};

export default DashboardGrid;
