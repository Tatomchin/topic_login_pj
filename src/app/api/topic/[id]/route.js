import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;
  await connectMongoDB();
  const topic = await Topic.findOne({ _id: id });
  return NextResponse.json(
    { meassage: `Get topic ID : ${topic._id}`, topic },
    { status: 200 }
  );
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { newTopic: topic, newDescription: description } = await req.json();
  await connectMongoDB();
  const checkOldName = await Topic.findById(id);

  if (topic === checkOldName.topic) {
    await Topic.findByIdAndUpdate(id, { topic, description });
    return NextResponse.json(
      { meassage: `Updated topic ID : ${id}` },
      { status: 201 }
    );
  } else {
    const checkTopic = await Topic.find({ topic: topic });
    if (checkTopic.length === 0) {
      await Topic.findByIdAndUpdate(id, { topic, description });
      return NextResponse.json(
        { meassage: `Updated topic ID : ${id}` },
        { status: 201 }
      );
    }
  }
  return NextResponse.json(
    { message: "Already topic name, Fail to update topic" },
    { status: 400 }
  );
}
