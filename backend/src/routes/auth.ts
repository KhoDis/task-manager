import { Router } from 'express';
import { signUp, logIn, me } from '../controllers/authController';
import authMiddleware from '../middleware/authMiddleware';

const router = Router();

router.post('/signup', signUp);
router.post('/login', logIn);
router.get('/me', authMiddleware, me);

export default router;