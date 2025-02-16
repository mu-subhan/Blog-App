import express from "express"
import router from "./routes/user.route.js"
import postrouter from "./routes/post.route.js"
import commentrouter from "./routes/comment.route.js"
import webhookrouter from "./routes/webhook.route.js"
import { clerkMiddleware, requireAuth } from '@clerk/express'
import connectDB from "./lib/connectDB.js"
import dotenv from 'dotenv';
dotenv.config();  

const app = express()
app.use("/webhooks",webhookrouter)
app.use(clerkMiddleware());
app.use(express.json())
app.use((error,req,res,next)=>{
    res.status(error.status || 500);

    res.json({
        message:error.message ||"something went wrong",
        status:error.status,
        stack:error.stack,
    })
})

// app.get("/test",(req,res)=>{
//     res.status(200).send("it is working")
// })

// app.get("/auth-state",(req,res)=>{
//     const authState = req.auth;
//     res.json(authState);
// })


// app.get("/protect",(req,res)=>{
//     const {userid} = req.auth;
//     if(!userid){
//         return res.status(401).json("not authenticated")
//     }
//     res.status(200).json("content");
// })

app.get("/protect2",requireAuth(),(req,res)=>{
       
    res.status(200).json("content");
})

app.use("/users",router)
app.use("/posts",postrouter);
app.use("/comment",commentrouter)




app.listen(8000,()=>{
    connectDB()
    console.log("server is runing");
    
})