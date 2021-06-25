import express, { Request, Response } from "express";
import { OperationController } from "../controller/operation.controller";


export const operationRouter = express.Router();

const operationController = new OperationController();

operationRouter.post("/suma", async (req: Request, res: Response) => {
    const sum : number = await operationController.sum(req)
    return res.status(200).json(sum)

});