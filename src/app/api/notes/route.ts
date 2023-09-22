import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req: Request, res: NextResponse) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return null;
  }
  const body = await req.json();
  const { content } = body;

  const note = await prisma.note.create({
    data: {
      content: body.content,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(note, { status: 201 });
}

export async function handler(req: Request, res: NextResponse) {
  if (req.method === "GET") {
    try {
      const notes = await prisma.note.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      const safeNotes = notes.map((note) => ({
        ...note,
        createdAt: note.createdAt.toISOString(),
      }));
      NextResponse.json(safeNotes);
    } catch (error) {
      console.error(error);
      NextResponse.json({ error: "Internal Server Error" });
    }
  } else {
    NextResponse.json({ error: "Method Not Allowed" });
  }
}
