import express from 'express';
import { publicController } from '../controllers/publicController'

const router = express.Router();


router.get('/list', publicController)


export default router;
