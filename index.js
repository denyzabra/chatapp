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


/*
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

//added a route for login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','login.html'));
});

//user authentication
const users =[
    {username: 'user1', password: 'password1'},
    {username:'user2',password: 'password2'},
    //add more users as needed
];

//handle login POST request
app.post('/login', (req, res) => {
    const{username, password} = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        //Redirect to chat interface or another page
        res.redirect('/');
    } else{
        //Redirect back to login page with an error message
        res.redirect('/login?error=true');
    }
    
});

//restrict access to chat interface
app.get('/',(req, res) => {
    //check if user is authenticated,otherwise redirect to login page
    if(req.isAuthenticated()){
        res.sendFile(path.join(__dirname,'public','index.html'));

    }else{
        res.redirect('/login');
    }
});

//display username in chat
socket.emit('userAuthenticated', { username });
*/

//modified code
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

    // Day 7 code: Listen for messages from the client
    socket.on('testMessage', (message) => {
        console.log('Received message from client:', message);
        
        // Emit the same message back to all clients
        io.emit('testMessage', message);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//added a route for login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','login.html'));
});

//user authentication
const users =[
    {username: 'user1', password: 'password1'},
    {username:'user2',password: 'password2'},
    //add more users as needed
];

//handle login POST request
app.post('/login', (req, res) => {
    const{username, password} = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if(user){
        //Redirect to chat interface or another page
        res.redirect('/');
    } else{
        //Redirect back to login page with an error message
        res.redirect('/login?error=true');
    }
    
});

//restrict access to chat interface
app.get('/',(req, res) => {
    //check if user is authenticated,otherwise redirect to login page
    if(req.isAuthenticated()){
        res.sendFile(path.join(__dirname,'public','index.html'));

    }else{
        res.redirect('/login');
    }
});
