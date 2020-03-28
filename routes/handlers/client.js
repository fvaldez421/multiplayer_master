// import and use handler helpers here


const handlers = socketHandler => ([
  socketHandler.handle('join', (data, io, socket) => {
    console.log('user joined game:', data)
  }),
  socketHandler.handle('game-update', data => {
    console.log('game update:', data)
  }),
  socketHandler.handle('exit-game', data => {
    console.log('user left game:', data)
  })
]);

export default handlers;