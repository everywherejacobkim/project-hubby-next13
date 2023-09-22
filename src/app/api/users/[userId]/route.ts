import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export async function GET( req: Request, res: NextResponse ) {
  try {
      const userId = req.url.split("/users/")[1];
      console.log(userId);
      
    const existingUser = await prisma.user.findFirst({
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
  }
}
