"use client";
import React, { useState } from "react";
import Image from "next/image";
import microphoneIcon from "../../../public/assets/icons/microphone.png";
import NotesModal from "./NotesModal";
import FetchedNotes from "./FetchedNotes";

const Notes = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  return (
    <div className="w-full h-full relative">
      <h1 className="font-semibold mb-4">Notes</h1>
      <div className="flex flex-col gap-2 p-2">{/* <FetchedNotes /> */}</div>
      <NotesModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} />
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
