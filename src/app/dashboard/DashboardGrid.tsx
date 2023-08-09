import React from "react";
import TodoList from "@/components/todoList/TodoList";
import CurrentDate from "@/components/date/Date";
import CurrentTime from "@/components/date/Time";
import CurrentWeather from "@/components/location/CurrentWeather";

const DashboardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4 h-full max-w-screen-xl">
      {/* add each components in the gird */}
      <div className="flex border p-5 border-neutral-border">
        <CurrentTime />
      </div>
      <div className="flex border p-5 border-neutral-border">
        <CurrentDate />
      </div>
      <div className="flex py-5 justify-center col-span-2 border border-neutral-border">
       <CurrentWeather />
      </div>
      <div className="flex justify-center col-span-2 row-span-2 border border-neutral-border">
        Timer
      </div>
      <div className="flex justify-center col-span-2 row-span-4 border border-neutral-border">
        Notes
      </div>
      <div className="flex justify-center col-span-2 row-span-4 border border-neutral-border">
        ChatGPT
      </div>
      <div className="flex justify-center col-span-2 row-span-3 border border-neutral-border">
        <TodoList />
      </div>
    </div>
  );
};

export default DashboardGrid;
