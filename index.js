/*const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

//
/*
const express = require('express');
const path = require('path'); // Import the path module

const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define your routes here
app.get('/', (req, res) => {
    res.send('Server is running.');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
*/

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Define your routes here
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the HTML file
});

// Handle Socket.io events
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    socket.on('message', (message) => {
        io.emit('message', message); // Emit the received message to all clients
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
