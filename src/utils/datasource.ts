import { Pool } from 'pg'


export class DataSource {

    public connectionData = {}
    constructor() {
        this.connectionData = {
            user: 'postgres',
            host: process.env.DB_HOST,
            database: 'postgres',
            password: process.env.DB_PASSWORD,
            port: 5432,
        }
    }

    getPool(): Pool {
        return new Pool(this.connectionData)
    }

}