import { Router } from 'express';

//Controllers
import * as StatusController from '../controllers/StatusController.js'

const router = Router();

router.get('/', StatusController.index);

router.post('/', StatusController.store);

router.put('/:title', StatusController.update);

router.delete('/:title', StatusController.remove);

export default router;