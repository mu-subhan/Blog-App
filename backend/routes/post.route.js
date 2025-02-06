import express from 'express'
import { createPost,deletePost, getPost, getPosts } from '../controllers/post.controller.js';

const postrouter = express();

postrouter.get("/",getPosts);
postrouter.get("/:slug",getPost);
postrouter.post("/",createPost);
postrouter.delete("/:id",deletePost)



export default postrouter;