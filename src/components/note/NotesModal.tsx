"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface InitialStateProps {
  content: string;
}

const initialState: InitialStateProps = {
  content: "",
};

const NotesModal = ({
  modalIsOpen,
  setModalIsOpen,
}: {
  modalIsOpen: boolean;
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [state, setState] = useState(initialState);
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setState({ ...state, content: e.target.value });
  };

  const handleAddNote = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post("/api/notes", state)
      .then(() => {
        setModalIsOpen(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
    router.refresh();
  };

  return (
    <div>
      <div className={`modal ${modalIsOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" bg-white p-6 rounded-md w-1/2">
            <form onSubmit={handleAddNote}>
              <textarea
                value={state.content}
                rows={11}
                onChange={handleChange}
                className="p-2 w-full mb-2 rounded-md border border-gray-200 focus:outline-none focus:ring-1 focus:ring-primary focus:border-transparent "
              />
              <div className="flex justify-end gap-2">
                <button className="px-4 py-2 bg-primary text-neutral rounded-md">
                  Delete
                </button>
                <input
                  type="submit"
                  name="submitNote"
                  value="Save"
                  className="px-4 py-2 bg-primary-action text-white rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
        <div
          className={`overlay fixed inset-0 bg-black/10 z-40 ${
            modalIsOpen ? "block" : "hidden"
          }`}
        />
      </div>
    </div>
  );
};

export default NotesModal;
