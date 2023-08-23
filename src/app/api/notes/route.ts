import prisma from "../../../lib/prismadb";
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

    const newNote = await prisma.note.create({
      data: { content },
    });

    // Return the newly created note with a 201 Created status
    return NextResponse.json(newNote, { status: 201 });
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const notes = await prisma.note.findMany();
    return NextResponse.json(notes);
  } catch (error) {
    console.error("Error getting notes:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
