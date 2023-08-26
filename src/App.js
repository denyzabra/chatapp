/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


//
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <div className="App">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className="message">
                        {message}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default App;

*/

/*

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import './App.css';


const socket = io('http://localhost:3001');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <div className="App">
            <div className="chat-container">
                <div className="messages">
                    {messages.map((message, index) => (
                        <div key={index} className="message">
                            <span className="message-timestamp">
                                {new Date().toLocaleTimeString()}
                            </span>
                            {message}
                        </div>
                    ))}
                </div>
                <div className="message-input">
                    <input
                        type="text"
                        value={messageInput}
                        onChange={(e) => setMessageInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default App;
*
//modified codes
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';
import Chat from './chat'; // Import your Chat component
import Login from './login'; // Import the newly created Login component

const socket = io('http://localhost:3001');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <Router>
            <Route path="/" exact>
                {localStorage.getItem('username') ? (
                    <div className="App">
                        <Chat messages={messages} messageInput={messageInput} setMessageInput={setMessageInput} sendMessage={sendMessage} />
                    </div>
                ) : (
                    <Redirect to="/login" />
                )}
            </Route>
            <Route path="/login" component={Login} />
        </Router>
    );
}

export default App;*/
/*
import React from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom';
import './App.css';
import Chat from './chat'; // Import your Chat component
import Login from './login'; // Import the newly created Login component

const socket = io('http://localhost:3001');

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

function Main() {
    const [messages, setMessages] = React.useState([]);
    const [messageInput, setMessageInput] = React.useState('');

    React.useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <div className="App">
            <Chat messages={messages} messageInput={messageInput} setMessageInput={setMessageInput} sendMessage={sendMessage} />
        </div>
    );
}

export default App;

*/
//Day 3 code updated with user authentication
/*
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './chat';
import Login from './login';
import './styles.css';


const socket = io('http://localhost:3001');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const username = localStorage.getItem('username');

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={username ? <Chat messages={messages} messageInput={messageInput} setMessageInput={setMessageInput} sendMessage={sendMessage} /> : <Login />} />
            </Routes>
        </Router>
    );
}

export default App;
*/

//day 5 code modification
/*

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chat from './chat';
import Login from './login';
import './styles.css';

// Initialize Socket.io client
const socket = io('http://localhost:3000');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const username = localStorage.getItem('username');

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            // Emit the message to the server
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <Router>
            <Routes>
                {/* Use the `element` prop to conditionally render either Chat or Login component *}
                <Route
                    path="/"
                    element={
                        username ? (
                            // Render Chat component with necessary props
                            <Chat
                                messages={messages}
                                messageInput={messageInput}
                                setMessageInput={setMessageInput}
                                sendMessage={sendMessage}
                            />
                        ) : (
                            // Render Login component if not authenticated
                            <Login />
                        )
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
*/

//modified code on day 6
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Chat from './chat';
import Login from './login';
import './styles.css';

// Initialize Socket.io client
const socket = io('http://localhost:3000');

function App() {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const username = localStorage.getItem('username');

    useEffect(() => {
        // Listen for incoming messages from the server
        socket.on('message', (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });
    }, []);

    const sendMessage = () => {
        if (messageInput.trim() !== '') {
            // Emit the message to the server
            socket.emit('message', messageInput);
            setMessageInput('');
        }
    };

    return (
        <Router>
            <Routes>
                {/* Use the `element` prop to conditionally render either Chat or Login component */}
                <Route
                    path="/"
                    element={
                        username ? (
                            // Render Chat component with necessary props
                            <Chat
                                messages={messages}
                                messageInput={messageInput}
                                setMessageInput={setMessageInput}
                                sendMessage={sendMessage}
                            />
                        ) : (
                            // Render Login component if not authenticated
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
