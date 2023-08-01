import React from "react";
import { useTodoState } from "../../../context/TodoContext";

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTodos = todos.filter((todo) => !todo.done);

  return (
    <div className="px-auto border-b-2 border-solid border-yellow-400">
      <div className="m-10 font-bold">
        <h1 className="text-4xl text-green-600 tracking-wide mb-4">
          Todo List
        </h1>
        <div className="flex justify-center">
          You have &nbsp;
          <div
            className="text-yellow-500 text-3xl -mt-1 font-bold"
            style={{
              textShadow: "0 1px 1px #1e2f23, 0 -2px 1px #fff",
            }}
          >
            {undoneTodos.length}
          </div>
          &nbsp; remaining todos
        </div>
      </div>
    </div>
  );
};

export default TodoHead;
