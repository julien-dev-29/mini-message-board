import { Pool } from 'pg'

export default new Pool({
    host: process.env.PG_HOST, // or wherever the db is hosted
    user: process.env.PG_USER,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
    ssl: {
        rejectUnauthorized: false
    }
})