import app from './config/server';
// import './config/mongoose';

const PORT = process.env.port || 8080;

// Log any server errors
app.on('error', err => {
  console.error('Server error:', err);
});

// open port
app.listen(PORT, () => {
  console.log(`🌎 ===> Server listening on port ${PORT}!`);
});

