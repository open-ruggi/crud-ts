import { Request } from "express";
import { BaseUser, User } from "../model/interface/user.interface";
import { UserService } from "../service/user.service";


export class UserController {

    async logIn(req: Request): Promise<any> {
        const userService = new UserService()
        const body: User = req.body.user
        const token = await userService.logInUser(body.username, body.password);
        return token

    }

    async logOut(req: Request): Promise<any> {
        const userService = new UserService()
        const authorization: string | undefined = req.headers.authorization
        const result = await userService.logOutUser(authorization);
       return result

    }

    async validate(req: Request): Promise<any> {
        const userService = new UserService()
        const authorization: string | undefined = req.headers.authorization
        if (typeof (authorization) === 'undefined') return -1
        const result = await userService.userToken(authorization)
        if (result) {
            return result
        }
        return 0
    }

    async createUser(req: Request): Promise<User | boolean> {
        const userService = new UserService()
        const body: BaseUser = req.body.user
        const user: User = await userService.createUser(body)
        return user
    }
}