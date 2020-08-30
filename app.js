// Call in installed dependencies
import express from 'express';

// set up express app
const app = express();

// set up port number
const port = 4000;

// set up home route
app.get('/', (request, respond) => {
    respond.status(200).json({
        message: 'Welcome to Project Support',
    });
});

app.listen(port, (request, respond) => {
    console.log(request, respond);
    console.log(`Our server is live on ${port}. Dia dia!`);
});