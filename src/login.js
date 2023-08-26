/*import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const history = useHistory();

    const handleLogin = () => {
        // Simulate authentication for demonstration purposes
        if (username.trim() !== '') {
            // Store the username in local storage or a global state management system
            localStorage.setItem('username', username);

            // Redirect to the chat interface
            history.push('/');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
*/
/*
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLogin = () => {
        // Simulate login logic
        if (username === 'user' && password === 'password') {
            // Set some value in localStorage to indicate user is logged in
            localStorage.setItem('username', username);
            // Navigate to the main chat page
            navigate('/');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;

*/

//Day 3 update login.js with redirect after successful loginimport React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginstyles.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        // Replace 'correctUsername' and 'correctPassword' with the actual credentials
        const correctUsername = 'denyz';
        const correctPassword = 'denyz';
    
        if (username === correctUsername && password === correctPassword) {
            localStorage.setItem('username', username);
            navigate('/'); // Redirect to the main chat page
        } else {
            // Display an error message or handle incorrect login here
            console.log('Incorrect username or password');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
