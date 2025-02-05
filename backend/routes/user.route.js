import express from 'express'

const router = express();

router.get("/tester",(req,res)=>{
    res.status(200).send("yeh b chal raha")
})

export default router;