import express, { Request, Response } from "express";
import { UserController } from "../controller/user.controller";


export const userRouter = express.Router();
const userController = new UserController();


userRouter.post("/login", async (req: Request, res: Response) => {
    const user = await userController.logIn(req)
    return res.status(200).json(user)
});

userRouter.post("/create", async (req: Request, res: Response) => {
    const user = await userController.createUser(req)
    return res.status(200).json(user)
});
