import { Router } from 'express';

//Controllers
import * as UsersController from '../controllers/UsersController.js'

const router = Router();

router.get('/', UsersController.index);

router.get('/:id', UsersController.show);

router.post('/', UsersController.store);

router.put('/:id', UsersController.update);

router.delete('/:id', UsersController.remove);

export default router;