import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation.js';

import controller from './controller.js';

const route = Router();

route.post('/', controller.login);

export default route;
