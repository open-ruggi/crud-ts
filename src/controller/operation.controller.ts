import  { Request } from "express";
import { UserService } from "../service/user.service";


export class OperationController {

    async sum(req: Request): Promise<any> {
        const userService = new UserService()
        const authorization: string | undefined = req.headers.authorization
        try {
            const body: Operations = req.body.suma
            userService.validateToken(authorization)
            const  sum: number = body.firstValue + body.secondValue
            return sum

        } catch (error) {
            console.log(error)
        }
    }
}