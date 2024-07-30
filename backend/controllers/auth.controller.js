import User from "../models/user.model.js";

import  bcryptjs  from "bcryptjs";
import generateTokenAndsetCookie from "../utils/generateToken.js";


export const signUp = async(req,res,next)=>{
    const {fullName,userName,email,password,confirmPassword,gender,} = req.body ;
    try {
        if(password !== confirmPassword){
            return res.status(400).json({error:"Password don't match"})
        }

       

        const user = await User.findOne({userName});

        if(user){
            return res.status(400).json({error:"UserName is already exist"});
        }

        const findemail = await User.findOne({email});
        if(findemail){
            return res.status(400).json({error:"Email is already exist"});
        }

        const boyProflePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`
        const girlProflePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`
        const hashPassword = await bcryptjs.hash(password,10);
        const newUser = new User ({
            fullName,
            userName,
            email,
            password:hashPassword,
            gender,
            profilePic:gender==="Male" ? boyProflePic : girlProflePic

        })

        generateTokenAndsetCookie(newUser._id,res);
        const savedUser = await newUser.save();

    res.status(201).json({
      message: 'User created successfully',
      data: savedUser
    });
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal server Error"})
    }
   
}


export const signIn = async(req,res,next)=>{
    const {userName,password} = req.body ;
    const user = await User.findOne({userName});
    try {
        const user = await User.findOne({ userName });
    if (!user) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isPasswordCorrect = await bcryptjs.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }
        generateTokenAndsetCookie(user.id,res);
        res.status(200).json({
            _id:user._id,
            fullName:user.fullName,
            userName:user.userName,
            email:user.email,
            profilePic:user.profilePic,
        })
    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }
}


export const signOut = (req,res,next)=>{
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message:'Logged out successfully'})
    } catch (error) {
        console.log("Error in login controller",error.message);
        res.status(500).json({error:"Internal server error"})
    }

}