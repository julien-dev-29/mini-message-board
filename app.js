import express from 'express'
import router from './routers/router.js'
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
app.use(router)

app.listen(PORT, (error) => {
    if (error) throw error
    console.log(`Mini Message Board App runs on port: ${PORT}`);
})