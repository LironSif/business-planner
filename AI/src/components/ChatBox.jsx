// ChatBox.jsx
import React from 'react';
import './ChatBox.css';

const ChatBox = ({ messages, aiTyping }) => (
  <div className="chat-box">
    {messages.map((message, index) => (
      <div key={index} className={`message ${message.user ? 'user' : 'ai'}`}>
        {message.message}
      </div>
    ))}
    {aiTyping && <div className="ai-typing">AI is typing...</div>}
  </div>
);

export default ChatBox;
