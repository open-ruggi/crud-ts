
import { BaseUser, User } from '../model/interface/user.interface'
import { UserRepository } from '../model/user.repository'
export class UserService {

    public async findUser(username: string): Promise<User> {
        const userRepository = new UserRepository()
        const result = await userRepository.find(username)
        const row = result.rows[0]
        const user: User = {
            id: row.user_id,
            username: row.username,
            password: row.password
        }
        return user
    }

    public async createUser(newUser: BaseUser): Promise<User> {
        const userRepository = new UserRepository()
        const result = await userRepository.create(newUser)
        const row = result.rows[0]
        const user: User = {
            id: row.user_id,
            username: row.username,
            password: "******"
        }
        return user
    };

    public async logInUser(username: string, password: string): Promise<any> {
        const user: User = await this.findUser(username)
        console.log(user.password)
        console.log(password)

        console.log(user.password === password)

        if (user.password === password) {
            const userRepository = new UserRepository()
            const result = await userRepository.createToken(username)
            return {
                token: result.rows[0].token
            }
        }
        return {
            message: "contraseña o usuario incorrecto"
        }
    }

    public async userToken(token: string | undefined): Promise<any> {
        const userRepository = new UserRepository()
        const result = await userRepository.userByToken(token)
        if (result.rowCount>0) return result.rows[0].user_id
        return false
    }


    public async logOutUser(token: string | undefined): Promise<any> {
        const userRepository = new UserRepository()
        const result = await userRepository.removeTokenyByUser(token)
        if (result.rowCount>0) return true
        return false
    }
    
}