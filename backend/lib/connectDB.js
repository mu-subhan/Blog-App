import mongoose from "mongoose"

const connectDB =async()=>{
    try {
       await mongoose.connect(process.env.mongodb)
        console.log("Mongodb is connected");
        
    } catch (error) {
        console.log("connection error",error);
        
    }
}
export default connectDB