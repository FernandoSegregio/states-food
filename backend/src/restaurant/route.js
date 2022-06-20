import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation.js'

import controller from './controller.js';

const router = Router();

router.get('/food/:id', tokenValidation, controller.findFood);
router.get('/drink/:id', tokenValidation, controller.findDrink);
router.get('/', tokenValidation, controller.find);

export default router;
