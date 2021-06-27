
 import * as dotenv from "dotenv";
 import express from "express";
 import cors from "cors";
 import helmet from "helmet";
 import {operationRouter} from './route/operations.route'
 import {userRouter} from './route/user.route'
 import {utilRouter} from './route/util.route'


 dotenv.config();

 if (!process.env.PORT) {
    process.exit(1);
 }
 
 const PORT: number = parseInt(process.env.PORT as string, 10);
 
 const app = express();

 app.use(helmet());
 app.use(cors());
 app.use(express.json());
 app.use("/api/operation", operationRouter);
 app.use("/api/user", userRouter);
 app.use("/api", utilRouter);

 utilRouter


 app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });