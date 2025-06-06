import { Router } from 'express';
import { sendEmailController } from '../controllers/email.controllers';

const router = Router();

router.post('/', sendEmailController);

export default router;