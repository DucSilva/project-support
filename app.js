/* eslint-disable no-undef */
// Call in installed dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import cors from "cors";
import dotenv from 'dotenv';
import mainRoutes from './server/routes/main';
import homeRoute from './server/routes/index';

// set up dependencies
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
// set up dotenv
require('dotenv').config();
// set up mongoose
mongoose.connect('mongodb://localhost:27017/project_support')
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => {
        console.log('Error connecting to database', error)
    });

mongoose.Promise = global.Promise;

// connect to mongoose
// mongoose.connect(process.env.MONGODB, { useNewUrlParser: true })
// set up port number
const port = process.env.PORT || 33336;

// set up home route
homeRoute(app);
app.use('/api', mainRoutes)
app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Support',
    });
});

// set up a wildcard route to catch related endpoints and outputs a response.
app.get('*', (req, res) => {
    res.status(400).json({
        message: 'This is Project Support. Please see documentation for the proper routes.',
    });
});

app.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

app.listen(port);

export default app;