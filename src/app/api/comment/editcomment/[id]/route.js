import Comment from "@/models/comment";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const commentID = params.id;
  await connectMongoDB();
  const comment = await Comment.findOne({_id : commentID});
  return NextResponse.json(
    { meassage: `Get One comment by commentID : ${commentID}`, comment },
    { status: 200 }
  );
}

export async function PUT(req, { params }){
  const {id} = params;
  const { newDescription: description }= await req.json();
  await connectMongoDB();
  await Comment.findByIdAndUpdate(id, { description });
  return NextResponse.json({meassage: `Updated comment ID : ${id}`},{status:201})
}
