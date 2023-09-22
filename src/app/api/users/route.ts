import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify(
      { message: "Error getting users" })
    )
  }
}
