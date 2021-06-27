import { DataSource } from '../utils/datasource'
import { QueryResult } from 'pg'
export class OperationRepository {


    async create(firstValue:number, secondValue:number ,resultValue:number,userId: number): Promise<QueryResult> {
        const pool = new DataSource().getPool()
        return pool.query('INSERT INTO operations(user_id, first_value, second_value,result_value,created_on) VALUES ($1,$2,$3,$4,$5) RETURNING *', [userId, firstValue,secondValue,resultValue, new Date()]);
    }

    async findAll(userId:number): Promise<QueryResult> {
        const pool = new DataSource().getPool()
        return pool.query('SELECT * FROM operations WHERE user_id=$1', [userId]);
    }
}
