import { getServerSession } from "next-auth";
import { authOptions } from "../../app/api/auth/[...nextauth]/route";
import prisma from "../../lib/prismadb";

export async function getSession() {
  const session = await getServerSession(authOptions);
  return session;
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    const currentUser = await prisma.user.findUnique({
      where: { email: session.user.email as string },
    });
    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      id: currentUser.id.toString(),
    };
  } catch (err) {
    return null;
  }
}
