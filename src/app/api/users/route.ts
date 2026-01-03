import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request, response: Response) {
  try {
    const users = await prisma.user.findMany({});
    return NextResponse.json({ users }, { status: 200 });
  } catch (err: unknown) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
