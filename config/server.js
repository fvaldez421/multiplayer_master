import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import routes from '../routes';

const app = express();

// encode and parse our request data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// handle logging
app.use(morgan('combined'));

// implement our routes
app.use('/', routes);

export default app;