import { Router } from 'express';

import { getLines } from './controller';

const router = Router();

router.get('/lines', getLines);

export default router;
