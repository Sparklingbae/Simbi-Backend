import { Router } from 'express';
import { sendEmailController ,sendWelcomeEmailController } from '../controllers/email.controllers';

const router = Router();

router.post('/', sendEmailController);

// send welcome email
router.post('/welcome', sendWelcomeEmailController);

export default router;