// import and use route helpers here
import { socketHandler } from '../../index'

const routes = router => {
  router.route('/lobbies')
    .get((req, res) => {
      res.json({ message: 'Lobbies is live!' });

      let status = true;
      // socketHandler.io.sockets.emit('lobbies-update', { gameStatus: status })

      // the logic below works!
      setInterval(() => {
        socketHandler.io.sockets.emit('lobbies-update', { gameStatus: status })
        status = !status
      }, 1500);
    })
  return router;
}

export default routes;