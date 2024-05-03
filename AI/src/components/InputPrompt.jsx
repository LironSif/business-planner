// InputPrompt.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './InputPrompt.css';
import { serverApiUrl } from '../urls/urls.js'


const InputPrompt = ({ onSendMessage, onReceiveAIResponse }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;  // Prevent sending empty messages
        onSendMessage(message); // Send user's message to the chat history
        try {
            const response = await axios.post(`${serverApiUrl}api/generate-business-plan`, { description: message });
            onReceiveAIResponse(response.data.message); // Pass AI response to the parent component
        } catch (error) {
            console.error('Error fetching AI response:', error);
            // Handle error if needed
        }
        setMessage(''); // Clear the message input field
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button type="submit">Send</button>
        </form>
    );
};

export default InputPrompt;
