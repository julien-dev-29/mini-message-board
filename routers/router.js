import { Router } from "express";
import controller from "../controllers/controller.js";
import { query } from "express-validator";
const router = Router()

router.get('/', controller.getMessages)
router.get('/message/:id', controller.getDetails)
router.get('/new', controller.newGet)
router.post('/new', controller.newPost)

export default router