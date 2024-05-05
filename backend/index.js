const express = require('express');

const app = express();

const http = require('http').Server(app);

const cors = require('cors');
const socketIO = require('socket.io')(http, {
  cors: {
    origin: 'https://10.0.2.2:3000/'
  }
})

const PORT = 4000;

let chatgroups = [];

app.use(express.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors());

// Define a new route for GET requests to the path '/api'.
app.get('/api', (req, res) => {
  // When the '/api' endpoint is hit, log the request and response objects to the console.
  // This isn't typically useful in production as 'req' and 'res' can be very large objects.
  // It's also a potential security risk to log the entire request and response objects due to sensitive information they may contain.

  // This function is the callback that is called when a GET request is made to the '/api' endpoint.
  // 'req' stands for the request object, which contains information about the HTTP request.
  // 'res' stands for the response object, which is used to send back a response to the client.
  console.log(req, res);
});

socketIO.on('connection', (socket) => {
  console.log(` ${socket.id} a user connected`);
});


// Tell the HTTP server to start listening for requests on the specified PORT.
http.listen(PORT, () => {
  // When the server is successfully listening on the specified PORT, log a message to the console.
  console.log(`Server is listening on ${PORT}`);
});
