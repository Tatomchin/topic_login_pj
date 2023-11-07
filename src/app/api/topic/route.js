import connectMongoDB from "@/libs/mongodb";
import Comment from "@/models/comment";
import Topic from "@/models/topic";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json(
    { meassage: "Get all topic already", topics },
    { status: 200 }
  );
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  const dataIdentify = await req.json();
  await connectMongoDB();
  const idenUser = await User.find({ email: dataIdentify.email });
  const idenTopic = await Topic.find({ email: dataIdentify.email });
  if (idenUser.length > 0 && idenTopic.length > 0) {
    await Comment.deleteMany({ topic_id: id });
    await Topic.findByIdAndDelete(id);
    return NextResponse.json(
      { meassage: `Deleted topic ID : ${id}` },
      { status: 200 }
    );
  }
  return NextResponse.json(
    { meassage: `Deleted fail` },
    { status: 400 }
  );
}
