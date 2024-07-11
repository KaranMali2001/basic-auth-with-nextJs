import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config()
export async function connect() {
    console.log(process.env.MONGO_URL!)
    try {
        mongoose.connect(process.env.MONGO_URL || "mongodb+srv://karan:Karan5599@cluster0.dwpaa8w.mongodb.net/")
         const connection = mongoose.connection
         connection.on("connected",()=>{
            console.log("mongo connected succssfully")
         })
    } catch (error) {
        console.log("faliled to connect to mongo")
        console.log("err",error)
    }
}