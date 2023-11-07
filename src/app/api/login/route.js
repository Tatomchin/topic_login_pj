import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { email, password } = await request.json();
  await connectMongoDB();
  const user = await User.findOne({ email: email });

  try {
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        return NextResponse.json(
          { login: "Access", user, message: "รหัสผ่านถูกต้อง" },
          { status: 200 }
        );
      } else {
        return NextResponse.json(
          { login: "Denied", error: "รหัสผ่านไม่ถูกต้อง" },
          { status: 401 }
        );
      }
    } else {
      return NextResponse.json(
        { login: "Denied", error: "ไม่พบ ผู้ใช้งาน" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
        { login: "Denied", error: error },
        { status: 401 }
      );
  }
}
