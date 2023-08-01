import React from "react";
import { MdDone, MdDeleteOutline } from "react-icons/md";
import { useTodoDispatch } from "../../../context/TodoContext";

const CheckCircle = ({ done, children, onClick }: {
    done: boolean;
    children: React.ReactNode;
    onClick: () => void;
}) => (
  <div
    className={`flex items-center justify-center w-32 h-32 rounded-full border-2 border-solid ${
      done ? "border-green-500" : "border-gray-700"
    } text-3xl mr-8 cursor-pointer`}
    onClick={onClick}
  >
    {done ? <MdDone className="text-green-500" /> : children}
  </div>
);

const Text = ({ done, children }: {
    done: boolean;
    children: React.ReactNode;
}) => (
  <div
    className={`flex-1 text-xl ${
      done ? "text-gray-500 line-through" : "text-gray-800"
    } ml-4 hover:translate-x-5 hover:transition-transform cursor-default`}
  >
    {children}
  </div>
);

const Remove = ({ done, onClick, children }: {
    done: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) => (
  <div
    className={`flex items-center ${
      done ? "text-gray-500" : "text-gray-700 hover:text-red-500"
    } text-3xl cursor-pointer`}
    onClick={onClick}
  >
    {children}
  </div>
);

const TodoItemContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-start items-center py-4 max-w-sm w-full">
    {children}
  </div>
);

const ParentContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex">{children}</div>
);

const TodoItem = ({ id, done, text }: {
    id: number;
    done: boolean;
    text: string;
}) => {
  const dispatch = useTodoDispatch();

  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });

  return (
    <ParentContainer>
      <TodoItemContainer>
        <div className="flex items-center" onClick={onToggle}>
          <CheckCircle done={done} onClick={onToggle}>
            <MdDone />
          </CheckCircle>
          <Text done={done}>{text}</Text>
        </div>
      </TodoItemContainer>

      <Remove done={done} onClick={onRemove}>
        <MdDeleteOutline />
      </Remove>
    </ParentContainer>
  );
};

export default TodoItem;
