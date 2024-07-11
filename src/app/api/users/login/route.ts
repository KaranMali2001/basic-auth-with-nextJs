import { connect } from "@/dbConfig/config";
import user from "@/models/userModel";
import bcryptjs from "bcryptjs";

import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
//login route
connect()
export async function POST(request:NextRequest){
try {
    const reqBody=await request.json();
    const {username,password}=reqBody
   
    const User = await user.findOne({username})
    if(!User){
        return NextResponse.json({message:"user does not exist "},{status:400})
    }
    const validPassword=await bcryptjs.compare(password,User.password)
    if(!validPassword){
        
        return NextResponse.json({message:"password is not correct"},{status:400})
        
    }
    const tokenData={
        id:User._id
    }
    const token=await jwt.sign(tokenData,"karan5599",{expiresIn:"1d"})
    const res=NextResponse.json({
        message:"logged in successfully",
        success:true
    })
    res.cookies.set("token",token,{
        httpOnly:true,
    })
    return res
} catch (error:any) {
    return NextResponse.json({error:error.message})
}   
}