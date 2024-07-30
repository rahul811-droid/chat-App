
import mongoose from "mongoose";

const connectToMongoDB =async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb Database connected")
    } catch (error) {
        console.log("Error connecting to MongoDb",error.message)
    }
}


export default connectToMongoDB