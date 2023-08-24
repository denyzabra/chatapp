/*document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messageList = document.getElementById('message-list');
    const socket = io(); //connect to the socket.io server

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            /*
            const messageElement = document.createElement('div');
            messageElement.classList.add('message', 'user-message');
            messageElement.textContent = message;
            messageList.appendChild(messageElement);
            messageInput.value = '';
            scrollToBottom();
            socket.emit('message', message)// send the message
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    function scrollToBottom() {
        messageList.scrollTop = messageList.scrollHeight;
    }

    let isScrolling = false;

    messageList.addEventListener('scroll', () => {
        isScrolling = true;
    });

    function updateScroll() {
        if (!isScrolling) {
            scrollToBottom();
        }
        isScrolling = false;
    }
    socket.on('message', (message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message','received-message');//add 'received-message class'
        messageElement.textContent = message;
        messageList.appendChild(messageElement);
        scrollToBottom();
    });

    setInterval(updateScroll, 100);
});
*/
document.addEventListener('DOMContentLoaded', () => {
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');
    const messageList = document.getElementById('message-list');
    const socket = io(); // Connect to the Socket.io server

    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            socket.emit('message', message); // Send the message using Socket.io
            messageInput.value = '';
        }
    });

    messageInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });

    function scrollToBottom() {
        messageList.scrollTop = messageList.scrollHeight;
    }

    let isScrolling = false;

    messageList.addEventListener('scroll', () => {
        isScrolling = true;
    });

    function updateScroll() {
        if (!isScrolling) {
            scrollToBottom();
        }
        isScrolling = false;
    }

    socket.on('message', (message) => {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'received-message'); // Add 'received-message' class
        messageElement.textContent = message;
        messageList.appendChild(messageElement);
        scrollToBottom();
    });

    setInterval(updateScroll, 100);
});
