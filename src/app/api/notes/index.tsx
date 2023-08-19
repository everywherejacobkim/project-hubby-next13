import { createNote, getAllNotes, deleteNote } from "../../../../prisma/note";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    switch (req.method) {
      case "POST": {
        const { content, author, authorEmail } = req.body;

        if (!content || !author || !authorEmail) {
          return res.status(400).json({ message: "Missing required fields" });
        }

        const new_note = await createNote(content, author, authorEmail);
        return res.status(201).json(new_note);
      }
      case "GET": {
        const notes = await getAllNotes();
        return res.status(200).json(notes);
      }
      case "DELETE": {
        const { id } = req.query;

        if (!id) {
          return res.status(400).json({ message: "Missing id parameter" });
        }

        await deleteNote(id);
        return res.status(200).json({
          message: "Note deleted successfully",
        });
      }
      default: {
        return res.status(405).json({ message: "Method not allowed" });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
