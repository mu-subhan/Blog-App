import express from 'express'

const postrouter = express();

postrouter.get("/tester",(req,res)=>{
    res.status(200).send("yeh b chal raha")
})

export default postrouter;