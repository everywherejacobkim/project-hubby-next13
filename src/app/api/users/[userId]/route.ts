import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

export async function GET( req: Request, res: NextResponse ) {
  try {
      const userId = req.url.split("/users/")[1];
      console.log(userId);
      
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId,
      }
    });

    if (existingUser) {
        return NextResponse.json(
            { message: "Success", existingUser },
            { status: 200 }
            );
    } else {
        return NextResponse.json(
            { message: "User not found" },
            { status: 404 }
        );
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

export async function PATCH(req: Request, res: NextResponse ) {
    try {
      const userId = req.url.split("/users/")[1];
      const { name, email, password } = await req.json();
  
      const saltRounds = 10; 
      const hashedPassword = await bcrypt.hash(password, saltRounds);
  
      const updatedUser = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          name,
          email,
          hashedPassword,
        },
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
