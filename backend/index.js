import express from "express"
import router from "./routes/user.route.js"
import postrouter from "./routes/post.route.js"
import commentrouter from "./routes/comment.route.js"
const app = express()

// app.get("/test",(req,res)=>{
//     res.status(200).send("it is working")
// })

app.use("/users",router)
app.use("/posts",postrouter);
app.use("/comment",commentrouter)

// console.log("changing.");

app.listen(8000,()=>{
    console.log("server is runing");
    
})