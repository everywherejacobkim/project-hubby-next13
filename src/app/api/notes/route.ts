import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return null;
  }
  const body = await request.json();
  const { content } = body;

  const note = await prisma.note.create({
    data: {
      content: body.content,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(note, { status: 201 });
}

export async function handler(req: Request, res: any) {
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
      res.status(200).json(safeNotes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
