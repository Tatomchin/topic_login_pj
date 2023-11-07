import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, topic, description } = await req.json();
  await connectMongoDB();
  const checkTopic = await Topic.find({ topic: topic });
  if (checkTopic.length === 0) {
    await Topic.create({ email, topic, description });
    return NextResponse.json({ message: "Topic has created" }, { status: 201 });
  }
  return NextResponse.json(
    { message: "Already topic name, Fail to create topic" },
    { status: 400 }
  );
}
