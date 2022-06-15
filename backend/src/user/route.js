import { Router } from 'express';

import controller from './controller.js';

const route = Router();

route.get('/', controller.find);

export default route;
