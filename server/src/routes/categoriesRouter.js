import { Router } from 'express';

//Controllers
import * as CategoriesController from '../controllers/CategoriesController.js'

const router = Router();

router.get('/', CategoriesController.index);

router.post('/', CategoriesController.store);

router.put('/:title', CategoriesController.update);

router.delete('/:title', CategoriesController.remove);

export default router;