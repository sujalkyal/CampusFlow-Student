import { NextResponse } from "next/server";
import prisma from "../../../../db/src/index";

export async function POST(req) {
  try {
    const { subject_id } = await req.json();

    const sessions = await prisma.session.findMany({
      where: {
        subject_id,
      },
    });

    if (!sessions) {
      return NextResponse.json(
        { message: "No sessions found" },
        { status: 404 }
      );
    }

    return NextResponse.json(sessions, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
