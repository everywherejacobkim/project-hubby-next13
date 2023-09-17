import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function GET(req: Request, res: NextResponse) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      console.log("No session: Need login");
    }
    session && console.log("Get session", session);

    return NextResponse.json({
      authenticated: !!session,
      data: session ? session.user : null,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Can not load current user");
  }
}
