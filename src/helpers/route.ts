import { NextRequest } from "next/server"
import jwt  from "jsonwebtoken"
export const getdataFromToken=(request:NextRequest)=>{
    try {
        const token =request.cookies.get("token")?.value || ''

        const decodedToken:any=jwt.verify(token,"karan5599")
        console.log("decoded token with id"+decodedToken.id)
        return decodedToken.id

    } catch (error:any) {

        console.log(error.message)
    }
}