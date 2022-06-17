import { Router } from 'express';

//Controllers
import * as UsersController from '../controllers/UsersController.js'

const router = Router();

router.get('/', UsersController.index);

router.post('/', UsersController.store);

export default router;