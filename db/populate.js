import { Client } from "pg";
import 'dotenv/config'
import { ssl } from "pg/lib/defaults";
const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    message TEXT NOT NULL,
    username VARCHAR(50) NOT NULL,
    added TIMESTAMP NOT NULL DEFAULT NOW()
);

INSERT INTO messages (message, username, added) 
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
        database: process.env.PG_DATABASE,
        ssl: {
            rejectUnauthorized: false
        }
    })
    await client.connect()
    await client.query(SQL)
    await client.end()
    console.log("done");
}

main()