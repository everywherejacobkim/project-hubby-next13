"use client";
import React, { useState } from "react";
import Image from "next/image";
// import { useTodoState } from "../../app/context/TodoContext";
import TodoItem from "./TodoItem";
import TodoImage from "../../../public/assets/images/svg/todo-bg.svg";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  // const todos = useTodoState();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTodoItem: Todo = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newTodoItem]);
    setNewTodo("");
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodoText = (id: number, newText: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="relative w-full max-h-[400px]">
      <h1 className="font-semibold mb-4">Your to-Do list</h1>
      <div className="flex justify-center py-14">
        {newTodo ? (
          <ul>
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                toggleTodo={toggleTodo}
                updateTodoText={updateTodoText}
                deleteTodo={deleteTodo}
              />
            ))}
          </ul>
        ) : (
          <Image src={TodoImage} alt="todo-image" />
        )}
      </div>
      <div className="flex w-full">
        <input
          type="text"
          className="border rounded p-3 w-full bg-white"
          placeholder="New task..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button
          className="absolute right-1 z-30 bg-primary-action text-white rounded px-3.5 py-1 my-1.5"
          onClick={addTodo}
        >
          <div className="text-2xl">+</div>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
