"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';


interface ChatEntry {
    sender: string;
    message: string;
}

export default function Home() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState<ChatEntry[]>([]);

    const sendMessage = async () => {
        if (message.trim() === '') return;

        setChatHistory([...chatHistory, { sender: 'user', message }]);
        setMessage('');

        try {
            await axios.post('/api/send_message', { message });
            alert(`Processed Data: ${message}`);
            fetchChatHistory();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    const fetchChatHistory = async () => {
        try {
            const response = await axios.get('/api/get_chat_history');
            setChatHistory(response.data.chat_history);
        } catch (error) {
            console.error('Error fetching chat history:', error);
        }
    };

    useEffect(() => {
        fetchChatHistory();
    }, []);

    return (
        <div className=''>
            <h1 className="text-4xl font-bold mb-8 text-center">
                Real-time Chat App with Python Backend
            </h1>

            <div className="chat-container p-4">
                {chatHistory.map((entry, index) => (
                    <div
                        key={index}
                        className={`message mb-2 ${entry.sender}`}
                    >
                        {entry.message}
                    </div>
                ))}
            </div>

            <div className="input-container p-4 bg-red shadow-md">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="text-black p-2 border border-gray-300 rounded w-full"
                />
                <button onClick={sendMessage} className="bg-blue-500 text-white px-4 py-2 rounded ml-2">Send</button>
            </div>

            <footer className="text-center mt-8">
                <p className="text-sm">Name : Anubhav</p>
                <p className="text-sm">College : Noida Institute of Engineering and Technology</p>
                <p className="text-sm">Branch : AI/ML</p>
            </footer>
        </div>
    );
}
