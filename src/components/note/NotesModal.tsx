import React, { FormEvent } from "react";

const NotesModal = ({
  modalIsOpen,
  newNote,
  setNewNote,
  handleAddNote,
}: {
  modalIsOpen: boolean;
  newNote: Array<string>;
  setNewNote: (newNote: Array<string>) => void;
  handleAddNote: (e: FormEvent) => void;
}) => {
  return (
    <div>
      <div className={`modal ${modalIsOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" bg-white p-6 rounded-md w-1/2">
            <form onSubmit={handleAddNote}>
              <textarea
                value={newNote.join("\n")}
                rows={11}
                onChange={(e) => setNewNote(e.target.value.split("\n"))}
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
