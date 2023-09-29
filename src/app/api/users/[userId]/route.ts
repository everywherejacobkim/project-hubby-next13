import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import serverAuth from "@/lib/serverAuth";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

export async function GET(req: Request, res: NextResponse) {
  try {
    const userId = req.url.split("/users/")[1];

    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Success", existingUser },
        { status: 200 }
      );
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Error getting user", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PATCH(req: Request, res: NextResponse) {
  try {
    const { name, email, password, image } = await req.json();
    const { currentUser } = await serverAuth(req, res);

    if (!currentUser?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const updateData = {
      name: "",
      email: "",
      hashedPassword: "",
      image: "",
    };

    if (name) {
      updateData.name = name;
    }
    if (email) {
      updateData.email = email;
    }
    if (password) {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      updateData.hashedPassword = hashedPassword;
    }
    if (image) {
      updateData.image = image;
    }

    const updatedUser = await prisma.user.update({
      where: {
        id: currentUser?.id,
      },
      data: updateData,
    });

    return NextResponse.json(
      { message: "Success", updatedUser },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error updating user", error },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
