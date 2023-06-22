import { Router } from "express";
import { createSession } from "../controllers/payment.controller.js";


const router = Router();


router.post('/create-checkout-session', createSession)


router.get('/success', async (req, res) => {
    res.send('success')
})
router.get('/cancel', async (req, res) => {
    res.redirect('/')
})


export default router;