import prisma from "../../../../lib/prismadb";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });

    if (!note) {
      return new NextResponse(JSON.stringify({ message: "Note not found" }), {
        status: 404,
      });
    }

    const responseBody = JSON.stringify(note); // Convert the note object to a JSON string

    return new NextResponse(responseBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error getting note:", error);

    return new NextResponse(
      JSON.stringify({ message: "Internal server error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await request.json();
    const { content, author, authorEmail } = body;

    const { id } = params;

    const updateNote = await prisma.note.update({
      where: { id },
      data: { content },
    });

    if (!updateNote) {
      return new NextResponse(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }

    return NextResponse.json(updateNote, { status: 201 });
  } catch (error) {
    console.error("Error creating note:", error);
    return NextResponse.json({ message: "Update error" }, { status: 500 });
  }
};
