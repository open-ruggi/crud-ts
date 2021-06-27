import express, { Request, Response } from "express";


export const utilRouter = express.Router();


utilRouter.get("/healthcheck", async (req: Request, res: Response) => {
    return res.status(200).json({message: 'im alive'})
});
