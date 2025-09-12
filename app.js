import express from 'express'
import 'dotenv/config'
import router from './routers/router.js'
import { body, validationResult } from 'express-validator';
import path from 'node:path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const assetsPath = path.join(__dirname, "public");

// App
const app = express()
const PORT = process.env.PORT || 3000

// Middlewares
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));// app.js

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Router
const messageValidation = [
    body('message')
        .escape()
        .trim()
        .isLength({ min: 1 })
        .withMessage('Message cannot be empty')
        .isLength({ max: 500 })
        .withMessage('Message cannot exceed 500 characters'),
    body('username')
        .escape()
        .trim()
        .isLength({ min: 1 })
        .withMessage('Username cannot be empty')
        .isLength({ max: 50 })
        .withMessage('Username cannot exceed 50 characters')
];
app.use(router, messageValidation);

// Server
app.listen(PORT, (error) => {
    if (error) throw error
    console.log(`Mini Message Board App runs on port: ${PORT}`);
})