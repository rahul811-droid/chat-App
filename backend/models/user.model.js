
import mongoose  from "mongoose";

const userShema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    gender:{
        type:String,
        required:true,
       enum:["Male","Female"]
    },
    profilePic:{
        type:String,
        default:""
    },

},{timestamps:true}

)

const User = mongoose.model('User',userShema);
export default User ;