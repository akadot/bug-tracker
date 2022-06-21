import { Router } from 'express';

//Controllers
import * as TicketsController from '../controllers/TicketsController.js'

const router = Router();

router.get('/', TicketsController.index);

router.post('/', TicketsController.store);

router.put('/:id', TicketsController.update);

router.delete('/:id', TicketsController.remove);

export default router;