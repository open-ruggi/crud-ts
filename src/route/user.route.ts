import express, { Request, Response } from "express";
import { UserController } from "../controller/user.controller";


export const userRouter = express.Router();
const userController = new UserController();


userRouter.post("/login", async (req: Request, res: Response) => {
    try {
        const user = await userController.logIn(req)
        return res.status(200).json({ user: user })
    } catch (error) {
        return res.status(400).json({ message: "password or/and user are incorrect" })
    }
});

userRouter.post("/logout", async (req: Request, res: Response) => {
    const validate = await userController.validate(req)
    if (validate === -1)  res.status(400).json({message: 'missing authentication'})
    if (validate === 0)  res.status(401).json({message: 'incorrect authentication'})
    try {
        await userController.logOut(req)
        return res.status(200).json({ message: "logout sucess" })
    } catch (error) {
        return res.status(400).json({ message: "password or/and user are incorrect" })
    }
});

userRouter.post("/create", async (req: Request, res: Response) => {
    try {
        const user = await userController.createUser(req)
        return res.status(200).json({ user: user })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: error.detail })
    }
});
