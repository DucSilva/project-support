// Call in installed dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import logger from 'morgan';
import mainRoutes from './server/routes/main'

// set up dependencies
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));

// set up mongoose
mongoose.connect('mongodb://localhost:27017/project_support')
    .then(() => {
        console.log('Database connected')
    })
    .catch((error) => {
        console.log('Error connecting to database', error)
    });
// set up port number
const port = 33336;

// set up home route
app.use('/api', mainRoutes)
app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Support',
    });
});

app.listen(port, (request, respond) => {
    console.log(request, respond);
    console.log(`Our server is live on ${port}. Dia dia!`);
});