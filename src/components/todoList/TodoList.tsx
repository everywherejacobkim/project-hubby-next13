"use client";
import React from "react";
import { useTodoState } from "../../app/context/TodoContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
  const todos = useTodoState();
  return (
    <div className="flex-1 bg-gray-light rounded-b-lg">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
