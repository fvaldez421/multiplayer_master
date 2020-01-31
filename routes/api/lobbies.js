// import and use route handlers here


const routes = router => {
  router.route('/lobbies')
    .get((req, res) => {
      res.json({ message: 'Lobbies is live!' })
    })
  return router;
}

export default routes;