"use client";
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import microphoneIcon from "../../../public/assets/icons/microphone.png";
import NotesModal from "./NotesModal";
import axios from "axios";
import { useRouter } from "next/navigation";

interface InitialStateProps {
  content: string;
}

const initialState: InitialStateProps = {
  content: "",
};

const Notes = () => {
  const [state, setState] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);

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

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await axios.get("/api/notes");
        const data = response.data;
        setNotes(data);
      } catch (err) {
        console.error(err);
      }
    }

    loadNotes();
  }, []);

  return (
    <div className="w-full h-full relative">
      <h1 className="font-semibold mb-4">Notes</h1>
      {/* Notes list */}
      <div className="flex flex-col gap-2 p-2">{notes}</div>
      <NotesModal
        modalIsOpen={modalIsOpen}
        handleAddNote={handleAddNote}
        handleChange={handleChange}
        state={state}
      />
      <button
        onClick={() => setModalIsOpen(true)}
        className="absolute flex justify-center gap-2 w-full bottom-0 mt-4 p-3 bg-primary-action text-white rounded-md"
      >
        <Image src={microphoneIcon} alt="microphone" />
        <p>Add Note</p>
      </button>
    </div>
  );
};

export default Notes;
