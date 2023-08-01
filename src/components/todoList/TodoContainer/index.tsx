import React, { ReactNode } from "react";

const TodoContainer = ({ children }: {
    children: ReactNode;
}) => {
  return (
    <div className="flex flex-col w-512 h-auto relative bg-yellow-200 rounded-2xl shadow-sm mt-20 ml-20 mb-50">
      {children}
    </div>
  );
};

export default TodoContainer;
