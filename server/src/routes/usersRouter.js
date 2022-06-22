import { Router } from 'express';
import CheckJWT from '../Utils/CheckJWT.js';

//Controllers
import * as UsersController from '../controllers/UsersController.js'

const router = Router();

router.get('/', CheckJWT, UsersController.index);

router.get('/:id', CheckJWT, UsersController.show);

router.post('/', UsersController.store);

router.put('/:id', CheckJWT, UsersController.update);

router.delete('/:id', CheckJWT, UsersController.remove);

export default router;