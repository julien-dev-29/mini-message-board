import db from '../db/queries.js'

export default {
    getMessages: async (req, res) => {
        res.render('index', { messages: await db.getAllMessages() })
    },
    getDetails: async (req, res) => {
        const id = (req.params.id);
        res.render('details', { message: await db.getMessageById(id) });
    },
    newPost: async (req, res) => {
        await db.insertMessage(req.body.messageText, req.body.username)
        res.redirect('/')
    },
    newGet: (req, res) => {
        res.render('form')
    }
}