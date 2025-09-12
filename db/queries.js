import pool from "./pool.js";

export default {
    getAllMessages: async () => {
        const { rows } = await pool.query("SELECT * FROM messages")
        return rows
    },
    getMessageById: async (id) => {
        const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [id])
        return rows[0]
    },
    insertMessage: async (messageText, username) => {
        await pool.query(
            "INSERT INTO messages (message, username, added) VALUES ($1, $2, $3)",
            [messageText, username, new Date()]
        )
    }
}