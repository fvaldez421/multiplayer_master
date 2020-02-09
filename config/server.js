import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import routes from '../routes';


const app = express();
const server = http.createServer(app);

// encode and parse our request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// handle logging
app.use(morgan('combined'));

/**
 * The lines 23-27 below are soley used for testing socket.io while serving 
 * static files from `views`. They will likely be removed after v1 of the 
 * client side React app is up and has support for websockets
 */
app.use(express.static(__dirname + '/../node_modules'));
app.use(express.static(path.join(__dirname, 'views')));
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname + '/../views/index.html'))
})


// implement our routes
app.use('/', routes);


export default server;