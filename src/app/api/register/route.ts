import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "../../../lib/prismadb";
import userSchema from "../../../lib/userSchema";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password } = userSchema.parse(body);
    const hashedPassword = await bcrypt.hash(password, 10);

    //Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existingUser) {
      return NextResponse.json(
        { user: null, message: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        hashedPassword,
      },
    });

    return NextResponse.json(
      { user: newUser, message: "User created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { user: null, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
