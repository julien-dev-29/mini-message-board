import { Router } from "express";
import controller from "../controllers/controller.js";
const router = Router()

router.get('/', controller.getMessages)
router.get('/message/:id', controller.getDetails)
router.get('/new', (req, res) => { res.render('form') })
router.post('/new', controller.addMessage)

export default router