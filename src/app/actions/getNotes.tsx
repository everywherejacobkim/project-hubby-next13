import prisma from "@/lib/prismadb";

export default async function getNotes() {
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

    return safeNotes;
  } catch (err: any) {
    throw new Error(err);
  }
}
