import { Request, Response } from 'express';

import lines from './lines';

export const getLines = (req: Request, res: Response) => {
  res.json({ lines });
};
