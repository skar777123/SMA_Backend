import { AddComment, Addlikes } from "../controllers/com-likeController.js";
import { verifyToken } from "../middleware/userAuth.js";
import express from "express";
const clRouter = express.Router();

clRouter.post("/comment/:id", verifyToken, AddComment);
clRouter.post("/likes/:id", verifyToken, Addlikes);

export default clRouter;
