import React from "react";

const NotesModal = ({
  modalIsOpen,
  newNote,
  setNewNote,
  handleAddNote,
}: {
  modalIsOpen: boolean;
  newNote: Array<string>;
  setNewNote: (newNote: Array<string>) => void;
  handleAddNote: () => void;
}) => {
  return (
    <div>
      <div className={`modal ${modalIsOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md w-1/2 h-1/2">
            <form action="/dashboard" method="post">
              <textarea
                value={newNote.join("\n")}
                rows={11}
                onChange={(e) => setNewNote(e.target.value.split("\n"))}
                className="p-2 w-full mb-2 rounded-md"
              />
              <input
                type="submit"
                name="submitNote"
                value="Submit"
                onClick={handleAddNote}
                className="p-2 bg-primary-action text-white rounded-md"
              />
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
