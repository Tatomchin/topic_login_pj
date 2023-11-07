import Comment from "@/models/comment";
import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET(req,{ params }){
    const topicID =  params.id;
    await connectMongoDB();
    const comments = await Comment.find({
        topic_id: topicID
    })
    return NextResponse.json({meassage: `Get all comment by Topic ID : ${topicID}`,comments},{status:200})
}
