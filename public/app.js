/**
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageList = document.getElementById('message-list');

sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message;
    messageList.appendChild(messageElement);
    messageInput.value = '';
  }
});
*/
// Retrieve elements
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const messageList = document.getElementById('message-list');

// Update Send Button Click Event
sendButton.addEventListener('click', () => {
  const message = messageInput.value.trim();
  if (message !== '') {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'user-message'); // Add 'user-message' class
    messageElement.textContent = message;
    messageList.appendChild(messageElement);
    messageInput.value = '';
    scrollToBottom();
  }
});

// Real-time Display of Messages
messageInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    sendButton.click(); // Simulate a click on the sendButton
  }
});

// Scroll to Bottom of Message List
function scrollToBottom() {
  messageList.scrollTop = messageList.scrollHeight;
}

// Implement Scroll Behavior
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

setInterval(updateScroll, 100);

