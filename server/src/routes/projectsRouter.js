import { Router } from 'express';

//Controllers
import * as ProjectsController from '../controllers/ProjectsController.js'

const router = Router();

router.get('/', ProjectsController.index);

router.post('/', ProjectsController.store);

router.put('/:id', ProjectsController.update);

router.delete('/:id', ProjectsController.remove);

export default router;