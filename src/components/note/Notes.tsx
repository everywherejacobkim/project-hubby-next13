"use client";
import React, { useState } from "react";
import Image from "next/image";
import microphoneIcon from "../../../public/assets/icons/microphone.png";
import NotesModal from "./NotesModal";

const Notes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newNote, setNewNote] = useState([]);

  const handleAddNote = () => {
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-full h-full relative">
      <h1 className="font-semibold mb-4">Notes</h1>
      {/* Notes list */}
      <div className="flex flex-col gap-2 p-2">
        {newNote.map((note, index) => (
          <div key={index} className=" bg-primary py-2 px-3 rounded-lg">
            {note}
          </div>
        ))}
      </div>
      <NotesModal
        modalIsOpen={modalIsOpen}
        newNote={newNote}
        setNewNote={setNewNote}
        handleAddNote={handleAddNote}
      />
      <button
        onClick={() => setModalIsOpen(true)}
        className="absolute flex justify-center gap-2 w-full bottom-0 mt-4 p-3 bg-primary-action text-white rounded-md"
      >
        <Image src={microphoneIcon} alt="microphone" />
        <p>Add Note</p>
      </button>

      {/* Modal */}
    </div>
  );
};

export default Notes;
