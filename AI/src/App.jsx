// App.jsx
import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import InputPrompt from './components/InputPrompt';

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [aiTyping, setAiTyping] = useState(false);

    const handleUserMessage = (message, isUser = true) => {
        setChatHistory(prevHistory => [...prevHistory, { user: isUser, message }]);
        setAiTyping(true);  // Simulate AI processing time
        // This setTimeout is assumed necessary for some other part of your logic, such as simulating network delay
        setTimeout(() => {
            setAiTyping(false);
            // The AI response is now handled directly within the response from your backend/API
            // handleAIResponse("How can I help you further?");  // Remove or comment out this line
        }, 1000);
    };

    const handleAIResponse = (response) => {
        setChatHistory(prevHistory => [...prevHistory, { user: false, message: response }]);
    };

    return (
        <div className="App">
            <header className="header">
                <h1>The COMPANY LTD</h1>
                <h3>Ai Business Planner</h3>
            </header>
            <ChatBox messages={chatHistory} aiTyping={aiTyping} />
            <InputPrompt onSendMessage={handleUserMessage} onReceiveAIResponse={handleAIResponse} />
        </div>
    );
}

export default App;
