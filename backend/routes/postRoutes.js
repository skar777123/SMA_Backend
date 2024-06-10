import { createPost, deletePost } from "../controllers/postController.js";
import { verifyToken } from "../middleware/userAuth.js";
import express from "express";
const postRouter = express.Router();

postRouter.post("/createPost", verifyToken, createPost);
postRouter.post("/deletePost", verifyToken, deletePost);

export default postRouter;
