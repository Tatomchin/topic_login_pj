import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDB();
  const checkUser = await User.find({ email: email });
  if (checkUser.length === 0) {
    await User.create({ email, password });
    return NextResponse.json(
      { message: "Created user already!" },
      { status: 201 }
    );
  }
  return NextResponse.json(
    { message: "Already email, Fail to create user!" },
    { status: 400 }
  );
}

// export async function GET() {
//   console.log("api res okkkk");
//   return NextResponse.json({ message: "Res OK !" }, { status: 200 });
// }
