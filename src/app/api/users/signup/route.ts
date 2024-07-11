import { connect } from "@/dbConfig/config";
import user from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
//signUp route
connect();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    console.log(reqBody);
    const User = await user.findOne({ email });

    if (User) {
      return NextResponse.json(
        { error: "user already exist" },
        { status: 400 }
      );
    }
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newUser = new user({
      username,
      password: hashedPassword,
      email,
    })
    await newUser.save()
    console.log(newUser);
    return NextResponse.json({
      message: "user created sucessfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
