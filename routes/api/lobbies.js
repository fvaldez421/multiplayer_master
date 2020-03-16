// import and use route handlers here
import { socketRouter } from '../index';

const routes = router => {
  router.route('/lobbies')
    .get((req, res) => {
      res.json({ message: 'Lobbies is live!' });
      socketRouter.emit('test-room', { message: 'hello world' })
    })
  return router;
}

export default routes;