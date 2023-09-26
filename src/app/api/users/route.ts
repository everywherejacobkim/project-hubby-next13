import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET(req: Request, res: NextResponse) {
  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

      return NextResponse.json(
        { message: "Success", users },
        { status: 200 }
      );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
        { message: "Error getting users", error },
        { status: 500 }
    )
  } finally {
      await prisma.$disconnect();
  }
}
