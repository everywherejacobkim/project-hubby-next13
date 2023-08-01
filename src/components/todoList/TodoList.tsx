import React from "react";
import { useTodoState } from "../../../context/TodoContext";
import TodoItem from "../TodoItem";

const TodoListStyle = "flex-1 px-8 pb-40 bg-yellow-200 rounded-b-lg";

const TodoList: React.FC = () => {
  const todos = useTodoState();
  return (
    <div className={TodoListStyle}>
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
