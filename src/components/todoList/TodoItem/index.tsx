import React, { useState } from "react";
import Image from "next/image";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  updateTodoText: (id: number, newText: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  toggleTodo,
  updateTodoText,
  deleteTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewText(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (newText.trim() !== "") {
      updateTodoText(todo.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center justify-between mb-2 p-2 bg-gray-100 rounded">
      <div className="flex items-center">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="hidden"
          />
          <div className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center bg-white mr-2">
            {todo.completed && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4 text-green-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          {isEditing ? (
            <input
              type="text"
              value={newText}
              onChange={handleTextChange}
              onBlur={handleSaveClick}
              autoFocus
              className="outline-none border-b border-dotted focus:border-blue-500 px-1"
            />
          ) : (
            <p className={todo.completed ? "line-through" : ""}>{todo.text}</p>
          )}
        </label>
      </div>
      <div className="flex gap-2">
        <button
          className="text-blue-500 hover:text-blue-700 ml-2"
          onClick={handleEditClick}
        >
          <Image
            src="/assets/icons/edit.png"
            width={20}
            height={20}
            alt="edit-icon"
          />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => deleteTodo(todo.id)}
        >
          <Image
            src="/assets/icons/delete.png"
            width={20}
            height={20}
            alt="delete-icon"
          />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;