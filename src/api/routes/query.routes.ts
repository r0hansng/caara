import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => {
  const { query } = req.body;

  res.json({
    message: 'Query received',
    query
  });
});

export default router;
