import { dbConnect } from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { db } = await dbConnect();
    const data = await req.json()

    const result = await db.collection("allNews").insertMany(data);
    return NextResponse.json(
      { message: "News inserted successful", id: result.insertedCount },
      {status: 201}
    )
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: "Failed to create event" },
      {status: 500}
    )
  }
}