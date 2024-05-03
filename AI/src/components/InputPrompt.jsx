import React, { useState } from 'react';
import axios from 'axios';
import './InputPrompt.css';
import { serverApiUrl } from '../urls/urls.js';

const InputPrompt = ({ onSendMessage, onReceiveAIResponse }) => {
    const [message, setMessage] = useState('');
    const [waitingForUserInput, setWaitingForUserInput] = useState(true); // Assume always waiting unless told otherwise

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!message.trim()) return;  // Prevent sending empty messages
        onSendMessage(message);
        try {
            const response = await axios.post(`${serverApiUrl}api/generate-business-plan`, { description: message });
            onReceiveAIResponse(response.data.message);
            // Only update 'waitingForUserInput' if the response explicitly requires changing it
            if (response.data.waitForUserInput !== undefined) {
                setWaitingForUserInput(response.data.waitForUserInput);
            }
        } catch (error) {
            console.error('Error fetching AI response:', error);
            setWaitingForUserInput(true); // Keep input available on error
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
