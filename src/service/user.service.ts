
import { BaseUser, User } from '../model/user.interface'

export class UserService {

    users: User[] =
        [
            {
                id: 'f',
                name: 'fredy',
                user: 'fredy',
                password: 'fredy'
            },
            {
                id: 'd',
                name: 'diego',
                user: 'diego',
                password: 'diego'
            },
            {
                id: 'l',
                name: 'lucas',
                user: 'lucas',
                password: 'lucas'
            }
        ]

    public async findUser(user: string): Promise<User> {
        return this.users[this.users.findIndex((x) => x.user === user)]
    }

    public async createUser(newUser: BaseUser): Promise<User> {
        const id = newUser.user.charAt(0);
        this.users.push({
            id,
            ...newUser,
        })

        return this.users[this.users.findIndex((x) => x.id === id)];
    };

    public async logInUser(user: string, password: string): Promise<any> {

        const objUser: User = await this.findUser(user)

        if (objUser.password === password) {
            return objUser
        }
        return {
            message: false
        }
    }


    public async validateToken(token: string | undefined): Promise<any> {
        return true
    }




}