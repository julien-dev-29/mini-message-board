import { addMessage, getAllMessages, getMessageById } from "../repositories/messages.js"


export default {
    getMessages: (req, res) => {
        res.render('index', { messages: getAllMessages() })
    },
    getDetails: (req, res) => {
        const message = getMessageById(req.params.id);
        if (!message) {
            return res.status(404).send('Message not found');
        }
        res.render('details', { message });
    },
    addMessage: (req, res) => {
        addMessage(req)
        res.redirect('/')
    }
}