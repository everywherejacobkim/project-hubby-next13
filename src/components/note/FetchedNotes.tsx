import getNotes from "@/app/actions/getNotes";

const FetchedNotes = async () => {
  const notes = await getNotes();
  console.log("notes:", notes);
  return (
    <div>
      {notes.map((note: any, index: any) => (
        <div key={index} className="bg-primary py-2 px-3 rounded-lg">
          {note.content}
        </div>
      ))}
    </div>
  );
};

export default FetchedNotes;
