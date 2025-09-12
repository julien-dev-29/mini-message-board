import { Client } from "pg";
import 'dotenv/config'
const SQL = `INSERT INTO messages (message, username, added) 
VALUES 
('Hello, world!', 'user1', NOW()),
('This is a test message.', 'user2', NOW()),
('Express.js is great for building web applications.', 'user3', NOW()),
('I love programming!', 'user4', NOW()),
('Node.js and PostgreSQL make a powerful combination.', 'user5', NOW())
;`

async function main() {
    console.log("seeding...");
    const client = new Client({
        user: process.env.PG_USER,
        password: process.env.PG_PASSWORD,
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("done");
}

main()