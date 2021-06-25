import  { Request } from "express";
import { BaseUser, User } from "../model/user.interface";
import { UserService } from "../service/user.service";


export class UserController {
    async authorization(req: Request): Promise<any> {
        const userService = new UserService()
        const body: User = req.body.user
        console.log(body)
        try {
            const user: User = await userService.logInUser(body.user, body.password);
            console.log("user ",user)
            return user
        } catch (err) {
            return false
        }
    }

    async validate(req: Request): Promise<any> {
        const userService = new UserService()
        const authorization: string | undefined = req.headers.authorization
        try {
            if (await userService.validateToken(authorization)) {
                return true
            }
        } catch (err) {
            return false
        }
    }

    async createUser(req: Request): Promise<any> {
        const userService = new UserService()
        const body: BaseUser = req.body.user
        try {
            const user: User = await userService.createUser(body)
            return user

        } catch (err) {
            return false
        }
    }
}