"use client";
import React, { useState } from "react";

const Notes = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    setNewNote("");
    setModalIsOpen(false);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-full h-full relative">
      <h1 className="font-semibold mb-4">Notes</h1>
      {/* Notes list */}
      <button
        onClick={() => setModalIsOpen(true)}
        className="absolute w-full bottom-0 mt-4 p-3 bg-primary-action text-white rounded-md"
      >
        Add Note
      </button>
      {/* Modal */}
      <div className={`modal ${modalIsOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-80">
            <h2 className="text-lg font-semibold mb-2">Add New Note</h2>
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="border p-2 w-full mb-2 rounded-md"
            />
            <button
              onClick={handleAddNote}
              className="p-2 bg-blue-500 text-white rounded-md"
            >
              Add Note
            </button>
          </div>
        </div>
        <div
          className={`overlay fixed inset-0 bg-black opacity-50 ${
            modalIsOpen ? "block" : "hidden"
          }`}
          onClick={closeModal}
        ></div>
      </div>
    </div>
  );
};

export default Notes;
