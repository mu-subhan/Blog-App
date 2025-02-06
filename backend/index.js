import express from "express"
import router from "./routes/user.route.js"
import postrouter from "./routes/post.route.js"
import commentrouter from "./routes/comment.route.js"
import connectDB from "./lib/connectDB.js"
import dotenv from 'dotenv';
dotenv.config();  

const app = express()

// app.get("/test",(req,res)=>{
//     res.status(200).send("it is working")
// })

app.use("/users",router)
app.use("/posts",postrouter);
app.use("/comment",commentrouter)

// console.log("changing.");

app.listen(8000,()=>{
    connectDB()
    console.log("server is runing");
    
})