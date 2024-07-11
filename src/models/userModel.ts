
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "provide username"],
    unique: true,
  },
  email: {
    type: String,
    require: [true, "provide email"],
    unique: true,
  },
  password: {
    type: String || Number,
    require: [true, "provide password"],
  },
  isVerifed:{
    type:Boolean,
    default:false,
  },
  isAdmin:{
    type:Boolean,
    default:false,
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,
});
const user = mongoose.models.users || mongoose.model("users", userSchema);

export default user;
