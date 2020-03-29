import server from './config/server';
// database lines below will be implemented when set up
import './config/mongoose';


const PORT = process.env.port || 8080;

// Log any server errors
server.on('error', err => {
  console.error('Server error:', err);
});


// open port
server.listen(PORT, () => {
  console.log(`🌎 ===> Server listening on port ${PORT}!`);
});

export { server, socketHandler } from './config/server';