import Comment from "@/models/comment";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/user";

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  const dataIdentify = await req.json();
  await connectMongoDB();
  const idenUser = await User.find({ email: dataIdentify.email });
  if (idenUser.length > 0) {
    const idenComment = await Comment.find({ email: dataIdentify.email });
    if (idenComment.length > 0) {
      await Comment.findByIdAndDelete(id);
      return NextResponse.json(
        { meassage: `Deleated topic ID : ${id}` },
        { status: 201 }
      );
    }
    return NextResponse.json({ meassage: `Fail to delete` }, { status: 400 });
  }
  return NextResponse.json({ meassage: `Fail to delete` }, { status: 400 });
}
