import express, { Request, Response } from "express";
import { OperationController } from "../controller/operation.controller";
import { UserController } from "../controller/user.controller";


export const operationRouter = express.Router();

const operationController = new OperationController();
const userController = new UserController();

operationRouter.post("/suma", async (req: Request, res: Response) => {
    const validate = await userController.validate(req)
    if (validate === -1)  res.status(500).json({message: 'missing authentication'})
    if (validate === 0)  res.status(500).json({message: 'incorrect authentication'})
    const sum : number =  await operationController.saveSum(req,validate)
    return res.status(200).json(sum)
});

operationRouter.get("/records", async (req: Request, res: Response) => {
    const validate = await userController.validate(req)
    if (validate === -1)  res.status(500).json({message: 'missing authentication'})
    if (validate === 0)  res.status(500).json({message: 'incorrect authentication'})
    const sum : number =  await operationController.getRecords(validate)
    return res.status(200).json(sum)
});