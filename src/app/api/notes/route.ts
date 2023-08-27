import { NextResponse } from "next/server";
import prisma from "../../../lib/prismadb";
import getCurrentUser from "@/components/auth/getCurrentUser";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return null;
  }
  const body = await request.json();
  const note = await prisma.note.create({
    data: {
      content: body.content,
      userId: currentUser.id,
    },
  });
  return NextResponse.json(note, { status: 201 });
}

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
