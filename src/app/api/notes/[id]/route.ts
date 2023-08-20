import prisma from "../../../../libs/prismadb";
import { NextResponse, NextRequest } from "next/server";

export default async function handler(
  request: NextRequest,
  params: { id: string }
) {
  try {
    const { id } = params;

    const note = await prisma.note.findUnique({
      where: {
        id,
      },
    });

    if (!note) {
      return new NextResponse({ message: "Note not found" } as any, {
        status: 404,
      });
    }

    return new NextResponse(note as any);
  } catch (error) {
    console.error("Error getting notes:", error);

    return new NextResponse({ message: "Internal server error" } as any, {
      status: 500,
    });
  }
}
