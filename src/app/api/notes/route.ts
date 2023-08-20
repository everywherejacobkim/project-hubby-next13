import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export const POST = async (request: { json: () => Promise<any> }) => {
  try {
    const body = await request.json();
    const { content, author, authorEmail } = body;

    // Ensure that the required data is present in the request body
    if (!content || !author || !authorEmail) {
      return NextResponse.json(
        { message: "Missing required data in request body" },
        { status: 400 }
      );
    }

    const new_note = await prisma.note.create({
      data: { content },
    });

    // Return the newly created note with a 201 Created status
    return NextResponse.json(new_note, { status: 201 });
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

// import { createNote, getAllNotes, deleteNote } from "../../../../prisma/note";
// import { NextApiRequest, NextApiResponse } from "next";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   try {
//     switch (req.method) {
//       case "POST": {
//         const { content, author, authorEmail } = req.body;

//         if (!content || !author || !authorEmail) {
//           return res.status(400).json({ message: "Missing required fields" });
//         }

//         const new_note = await createNote(content, author, authorEmail);
//         return res.status(201).json(new_note);
//       }
//       case "GET": {
//         const notes = await getAllNotes();
//         return res.status(200).json(notes);
//       }
//       case "DELETE": {
//         const { id } = req.query;

//         if (!id) {
//           return res.status(400).json({ message: "Missing id parameter" });
//         }

//         await deleteNote(id);
//         return res.status(200).json({
//           message: "Note deleted successfully",
//         });
//       }
//       default: {
//         return res.status(405).json({ message: "Method not allowed" });
//       }
//     }
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal server error" });
//   }
// }
