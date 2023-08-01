import React, { useState, ChangeEvent, FormEvent } from "react";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../../../context/TodoContext";

interface TodoCreateProps {}

const CircleButton: React.FC<{ open: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ open, ...props }) => (
  <button
    className={`fixed w-16 h-16 bg-green-500 rounded-full flex justify-center items-center ${
      open ? "transform rotate-45 bg-red-400 hover:bg-red-300 active:bg-red-600" : "hover:bg-green-600 active:bg-green-700"
    }`}
    {...props}
  />
);

const Modal: React.FC<React.FormHTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => (
  <form className="fixed bg-yellow-200 rounded-lg px-6 py-8 w-full bottom-0 left-0" {...props}>
    {children}
  </form>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => (
  <input
    className="border border-gray-300 rounded-lg px-4 py-2 w-full outline-none text-lg"
    {...props}
  />
);

const TodoCreate: React.FC<TodoCreateProps> = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => {
    setOpen(!open);
  };
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <Modal onSubmit={onSubmit}>
          <Input
            placeholder="Add a new todo and press enter"
            onChange={onChange}
            value={value}
            autoFocus
          />
        </Modal>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd className="text-white text-4xl" />
      </CircleButton>
    </>
  );
};

export default TodoCreate;