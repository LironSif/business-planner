// App.jsx
import React, { useState } from 'react';
import './App.css';
import ChatBox from './components/ChatBox';
import InputPrompt from './components/InputPrompt';
import DownloadLink from './components/DownloadLink';

function App() {
    const [chatHistory, setChatHistory] = useState([]);
    const [aiTyping, setAiTyping] = useState(false);

    const handleUserMessage = (message, isUser = true) => {
        setChatHistory(prevHistory => [...prevHistory, { user: isUser, message }]);
        if (isUser) setAiTyping(true);
    };

    const handleAIResponse = (response) => {
        setChatHistory(prevHistory => [...prevHistory, { user: false, message: response }]);
        setAiTyping(false);
    };

    return (
        <div className="App">
            <header className="header">
                <h1>The COMPANY LTD</h1>
                <h3>Ai Business Planner</h3>
            </header>
            <InputPrompt onSendMessage={handleUserMessage} onReceiveAIResponse={handleAIResponse} />
            <ChatBox messages={chatHistory} aiTyping={aiTyping} />
            {/* Add DownloadLink component if needed */}
        </div>
    );
}

export default App;
