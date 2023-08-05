import React from "react";
import CurrentDate from "../date/Date";
import CurrentTime from "../date/Time";

const DashboardGrid: React.FC = () => {

  return (
    <div className="grid grid-cols-6 gap-4 p-4 h-full">
      {/* add each components in the gird */}
      <div className="bg-gray-light flex items-center justify-center">
        <CurrentTime />
      </div>
      <div className="bg-gray-light flex items-center justify-center"><CurrentDate /></div>
      <div className="bg-gray-light flex items-center justify-center col-span-2">
        Weather
      </div>
      <div className="bg-gray-light flex items-center justify-center col-span-2 row-span-2">
        Timer
      </div>
      <div className="bg-gray-light flex items-center justify-center col-span-2 row-span-4">
        Notes
      </div>
      <div className="bg-gray-light flex items-center justify-center col-span-2 row-span-4">
        ChatGPT
      </div>

      <div className="bg-gray-light flex items-center justify-center col-span-2 row-span-3">
        To-do
      </div>
    </div>
  );
};

export default DashboardGrid;
