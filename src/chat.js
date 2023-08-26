/*import React from 'react';

const Chat = ({ messages, messageInput, setMessageInput, sendMessage }) => {
    return (
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
    );
};

export default Chat;
*/

//modified code to display username 
/*
import React from 'react';

const Chat = ({ messages, messageInput, setMessageInput, sendMessage, handleLogout, username }) => {
    return (
        <div className="chat-container">
            <header className="header">
                <h1>Welcome, {username}!</h1>
                <button className="logout-button" onClick={handleLogout}>
                    Logout
                </button>
            </header>
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
    );
};

export default Chat;*/
//update chat.js to have scroll to bottom 
/*
import React, { useEffect, useRef } from 'react';

const Chat = ({ messages, messageInput, setMessageInput, sendMessage, handleLogout, username }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <header className="header">
        <h1>Welcome, {username}!</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="message-timestamp">
              {new Date().toLocaleTimeString()}
            </span>
            {message}
          </div>
        ))}
        <div ref={messagesEndRef} />
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
  );
};

export default Chat;

*/

//updated chat.js to have timestamps
import React, { useEffect, useRef } from 'react';

const Chat = ({ messages, messageInput, setMessageInput, sendMessage, handleLogout, username }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-container">
      <header className="header">
        <h1>Welcome, {username}!</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <span className="message-timestamp">
              {new Date().toLocaleTimeString()}
            </span>
            {message}
          </div>
        ))}
        <div ref={messagesEndRef} />
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
  );
};

export default Chat;
