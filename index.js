import socketIo from 'socket.io';
import server from './config/server';
// database lines below will be implemented when set up
// import './config/mongoose';


const PORT = process.env.port || 8080;
const io = socketIo(server);

io.on('connection', socket => {
  console.log('Client connected...');
  socket.on('join', function(data) {
    console.log(data);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected.')
  })
})

// Log any server errors
server.on('error', err => {
  console.error('Server error:', err);
});


// open port
server.listen(PORT, () => {
  console.log(`🌎 ===> Server listening on port ${PORT}!`);
});

