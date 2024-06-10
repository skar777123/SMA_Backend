import { addRemoveFriend,  getOtherUsers } from "../controllers/friendsController.js";
import {verifyToken} from "../middleware/userAuth.js";
import express from "express";
const friendsRouter = express.Router();

friendsRouter.patch("/user-/:id/friend-/:friendId", verifyToken, addRemoveFriend);
friendsRouter.get('/getFriends/:id', verifyToken, getOtherUsers)
/*friendsRouter.post('/add-friend/:id',verifyToken,followUser)*/

export default friendsRouter;
