import { Router } from 'express';

//Controllers
import * as AuthController from '../controllers/AuthController.js'

const router = Router();

router.post('/login', AuthController.signIn);

router.post('/logout', AuthController.signOut);

export default router;