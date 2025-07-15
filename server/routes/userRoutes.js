import express from "express";
import { userAuth } from "../middlewares/auth.js";
import { registerUser, loginUser, logoutUser, userCredits } from "../controllers/userController.js";
import { generateImage } from "../controllers/imageController.js";


const userRouter = express.Router();

// auth routes
userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

// credit routes
userRouter.get("/credits", userAuth, userCredits);



export default userRouter;