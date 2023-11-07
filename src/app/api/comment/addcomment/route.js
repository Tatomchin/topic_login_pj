import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, description, topic_id } = await req.json();
  await connectMongoDB();
  await Comment.create({ email, description, topic_id });
  return NextResponse.json({ message: "Added comment" }, { status: 201 });
}
