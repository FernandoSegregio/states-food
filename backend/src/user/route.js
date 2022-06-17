import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation.js';

import controller from './controller.js';

const route = Router();

route.get('/', tokenValidation, controller.find);
route.post('/', controller.login);

export default route;
