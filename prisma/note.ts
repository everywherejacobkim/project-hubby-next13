import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createNote = async (
  content: string,
  author: string,
  authorEmail: string
) => {
  try {
    const note = await prisma.note.create({
      data: {
        content,
        author: {
          connect: {
            email: authorEmail,
          },
        },
        createdAt: new Date(),
      },
    });
    return note;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getAllNotes = async () => {
  const notes = await prisma.note.findMany();
  return notes;
};

export const deleteNote = async (id: string) => {
  const note = await prisma.note.delete({
    where: {
      id,
    },
  });
  return note;
};
