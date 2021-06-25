import express, { Request, Response } from "express";
import { UserController } from "../controller/user.controller";


export const userRouter = express.Router();


userRouter.post("/login", async (req: Request, res: Response) => {
    const userController = new UserController();
    const user = await userController.authorization(req)
    return res.status(200).json(user)

});

