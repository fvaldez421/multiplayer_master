import express from 'express';
import lobbyRoutes from './api/lobbies';
import sockets from '../config/websocket';


const apiRouter = express.Router();
const socketHandler = sockets.Handler();

// test route
apiRouter.get('', (req, res) => res.json({ message: 'Server is live!' }));

// list all other routes
apiRouter.use('/api', [
  lobbyRoutes(apiRouter)
]);


socketHandler.use([
  socketHandler.handler('join', (data, io, socket) => {
    io.sockets.emit('/lobbies-update', 'lobbies are up')
  })
])

export { apiRouter as router, socketHandler };
export default apiRouter;