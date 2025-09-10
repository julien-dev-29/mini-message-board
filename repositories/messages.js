import { log } from "node:console";

const messages = [
    {
        id: crypto.randomUUID(),
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        id: crypto.randomUUID(),
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

/**
 * 
 * @returns 
 */
const getAllMessages = () => {
    return messages
}

/**
 * 
 * @param {String} id 
 * @returns 
 */
const getMessageById = (id) => {
    console.log("ff: " + id);
    return messages.find(m => m.id === id)
}

const addMessage = (req) => {
    messages.push({ id: crypto.randomUUID(), text: req.body.messageText, user: req.body.username, added: new Date() })
}

export { getAllMessages, getMessageById, addMessage }