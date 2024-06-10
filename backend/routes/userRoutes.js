import {
  loginUser,
  registerUser,
  logoutUser,
  forgotPassword,
  getUsersForSidebar,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/userAuth.js";
import express from "express";
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", logoutUser);
userRouter.post("/forgot-password", forgotPassword);
userRouter.get("/getuser", verifyToken,getUsersForSidebar)

export default userRouter;
