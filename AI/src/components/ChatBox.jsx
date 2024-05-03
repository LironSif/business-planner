// ChatBox.jsx
import React, { useEffect, useRef } from 'react';
import './ChatBox.css';

const ChatBox = ({ messages, aiTyping }) => {
    const endOfMessagesRef = useRef(null);

    const scrollToBottom = () => {
        endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]); // Scroll to bottom whenever messages update

    return (
        <div className="chat-box">
            <div className="messages-container">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.user ? 'user' : 'ai'}`}>
                        <div className={`${message.user ? 'user-name' : 'ai-name'}`}>
                            {message.user ? 'You' : 'AI'}
                        </div>
                        <div className="message-content">{message.message}</div>
                    </div>
                ))}
                {aiTyping && <div className="ai-typing">AI is typing...</div>}
            </div>
            <div ref={endOfMessagesRef} />
        </div>
    );
};

export default ChatBox;
