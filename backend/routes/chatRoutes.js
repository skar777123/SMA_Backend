import { getMessages, sendMessage } from "../controllers/chatController.js";
import { verifyToken } from "../middleware/userAuth.js";
import express from "express";
const chatRouter = express.Router();

chatRouter.post("/send-message/:id", verifyToken, sendMessage);
chatRouter.get("/get-message/:id", verifyToken, getMessages);

export default chatRouter;
