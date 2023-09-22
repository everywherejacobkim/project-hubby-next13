import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET({ params }: {params: any}) {
  try {
  const { userId } = params; 
  console.log(userId);
    const existingUser = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });

    if (existingUser) {
      return NextResponse.json({ ...existingUser });
    } else {
      return new NextResponse(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }
  } catch (error) {
    console.error(error);
    return new NextResponse(JSON.stringify({ message: "Error getting user" }), {
      status: 500,
    });
  }
}
