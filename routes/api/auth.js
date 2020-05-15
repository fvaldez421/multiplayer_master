// import and use route helpers here
import { AuthController } from '../../controllers';

const routes = router => {
  router.route('/auth')
    .post(AuthController.signup)
    .put(AuthController.login)
  return router;
}

export default routes;