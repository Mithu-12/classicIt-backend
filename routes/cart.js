import express from 'express';
import { createCart, getAllCart } from '../controller/cart.js';


const router = express.Router()


router.post('/',  createCart );
router.get('/', getAllCart)

export default router;