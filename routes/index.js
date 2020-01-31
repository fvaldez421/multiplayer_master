import express from 'express';
import lobbyRoutes from './api/lobbies';


const router = express.Router();

// test route
router.get('', (req, res) => res.json({ message: 'Server is live!' }));

// list all other routes
router.use('/api', [
  lobbyRoutes(router)
]);

export default router;