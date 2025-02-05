import express from 'express'

const commentrouter = express();

commentrouter.get("/tester",(req,res)=>{
    res.status(200).send("yeh b chal raha")
})

export default commentrouter;