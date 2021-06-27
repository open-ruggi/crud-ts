import { DataSource } from '../utils/datasource'
import {createUuid} from '../utils/utils'
import { QueryResult } from 'pg'
import { BaseUser } from './interface/user.interface'
export class UserRepository {


    async create(user: BaseUser): Promise<QueryResult> {
        const pool = new DataSource().getPool()
        return await pool.query('INSERT INTO accounts(username, password, created_on) VALUES ($1,$2,$3) RETURNING *', [user.username, user.password, new Date()]);
    }

    async find(username:string): Promise<QueryResult> {
        const pool = new DataSource().getPool()
        return pool.query('SELECT * FROM accounts WHERE username=$1', [username]);
    }

    async createToken(username:string): Promise<QueryResult> {
        const pool = new DataSource().getPool()
        const uuid = createUuid()

        return pool.query('UPDATE accounts SET token=$1, last_login=$2 WHERE username=$3 RETURNING *', [uuid,  new Date(),username ]);
    }
    async userByToken(token:string| undefined): Promise<QueryResult> {
        const pool = new DataSource().getPool()
        return pool.query('SELECT * FROM accounts WHERE token=$1', [token]);
    }




}
