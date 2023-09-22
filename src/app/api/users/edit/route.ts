import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/lib/prismadb";

export default async function PATCH(req, res) {
  try {
    // Get the current user
    const { currentUser } = await getCurrentUser();

    const { name, email, hashedPassword, image } = req.body;

    if (!name || !email || !hashedPassword || !image) {
      throw new Error('Missing fields');
    }

    // Update the user using Prisma
    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        name,
        email,
        hashedPassword,
        image,
      },
    });

    // Return the updated user as JSON
    return new NextResponse({
      status: 200,
      body: updatedUser,
    });
  } catch (error) {
    console.error(error);
    // Return an error response as JSON
    return new NextResponse({
      status: 500, // You can choose an appropriate HTTP status code
      body: { message: "Error for editing user", error: error.message },
    });
  }
}
