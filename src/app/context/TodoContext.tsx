import React, { useReducer, createContext, useContext, useRef } from "react";

const initialTodos = [
  {
    id: 1,
    text: "Full stack project",
    done: true,
  },
  {
    id: 2,
    text: "1-hour work out",
    done: false,
  },
  {
    id: 3,
    text: "Cleaning garage",
    done: false,
  },
  {
    id: 4,
    text: "Grocery shopping",
    done: false,
  },
  {
    id: 5,
    text: "Make handmade ice-creme",
    done: false,
  },
];

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type TodoAction =
  | { type: "CREATE"; todo: Todo }
  | { type: "TOGGLE"; id: number }
  | { type: "REMOVE"; id: number };

function todoReducer(state: Todo[], action: TodoAction) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.todo);
    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
}

const TodoStateContext = createContext<Todo[]>(initialTodos);
const TodoDispatchContext = createContext(
  (() => 0) as React.Dispatch<TodoAction>
);
const TodoNextIdContext = createContext<{ current: number }>({ current: 6 });

export function TodoProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(6);
  return (
    <TodoStateContext.Provider value={state}>
      <TodoDispatchContext.Provider value={dispatch}>
        <TodoNextIdContext.Provider value={nextId}>
          {children}
        </TodoNextIdContext.Provider>
      </TodoDispatchContext.Provider>
    </TodoStateContext.Provider>
  );
}

export function useTodoState() {
  return useContext(TodoStateContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}

export function useTodoNextId() {
  return useContext(TodoNextIdContext);
}
