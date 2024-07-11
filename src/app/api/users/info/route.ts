import { connect } from "@/dbConfig/config";
import { getdataFromToken } from "@/helpers/route";
import user from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();
export async function GET(request: NextRequest) {
  try {
    const id = await getdataFromToken(request);
    const User = await user.findOne({ _id: id });
    return NextResponse.json({ message: "user found!", data: User });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
