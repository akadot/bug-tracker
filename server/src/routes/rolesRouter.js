import { Router } from 'express';

//Controllers
import * as RolesController from '../controllers/RolesController.js'

const router = Router();

router.get('/', RolesController.index);

router.post('/', RolesController.store);

router.put('/:title', RolesController.update);

router.delete('/:title', RolesController.remove);

export default router;