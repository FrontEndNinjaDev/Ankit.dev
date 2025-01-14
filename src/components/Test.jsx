import React, { useState, useEffect } from 'react';
import conf from '../conf/config';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [userGreeted, setUserGreeted] = useState(false);

  // Check if the user has chatted before using localStorage
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
    setMessages(storedMessages);

    // Check if the user has been greeted before
    const isNewUser = !localStorage.getItem('userGreeted');
    if (isNewUser) {
      setMessages((prevMessages) => [
        { text: 'Hi! Welcome to the chat. How can I help you today?', sender: 'ChatGPT' },
        ...prevMessages,
      ]);
      localStorage.setItem('userGreeted', 'true');
    } else {
      setMessages((prevMessages) => [
        { text: 'Welcome back! How can I assist you today?', sender: 'ChatGPT' },
        ...prevMessages,
      ]);
    }
  }, []);

  // Function to handle sending a message
  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'You' };
      setMessages([...messages, userMessage]);
      setInput('');
      setLoading(true);
      const prompt = encodeURIComponent(input);

      try {
        const response = await fetch(
          `https://free-chatgpt-api.p.rapidapi.com/chat-completion-one?prompt=${prompt}`,
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': conf.rapidapiKey,
              'X-RapidAPI-Host': conf.rapidapiHost,
            },
          }
        );
        const data = await response.json();
        const botMessage = {
          text: data.response || 'No Response From ChatGPT',
          sender: 'ChatGPT',
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.log('Error Fetching ChatGPT response', error);
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'Error Fetching The Data...', sender: 'ChatGPT' },
        ]);
      } finally {
        setLoading(false);
      }

      // Save messages to localStorage
      localStorage.setItem('chatMessages', JSON.stringify([...messages, userMessage]));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center dark:bg-gray-900 p-6 min-h-screen">
      <div className="w-full max-w-lg bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
        {/* Chat Header */}
        <div className="bg-custom-blue dark:bg-gray-800 text-center py-4">
          <h2 className="font-bold text-3xl dark:text-white">Chat with ChatGPT</h2>
        </div>
        <hr className="border-gray-300 dark:border-gray-600" />

        {/* Chat Messages */}
        <div className="h-96 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">No messages yet.</p>
          ) : (
            messages.map((message, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  message.sender === 'You'
                    ? 'bg-blue-100 dark:bg-gray-700 text-gray-800 dark:text-white'
                    : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white'
                }`}
              >
                <p className="font-semibold">{message.sender}</p>
                <p className="text-sm">{message.text}</p>
              </div>
            ))
          )}
        </div>

        {/* Chat Input */}
        <div className="flex items-center border-t dark:border-gray-700 p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-3 rounded-l-lg border dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button
            onClick={sendMessage}
            className="bg-custom-blue text-white font-bold px-4 py-2 rounded-r-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            {loading ? <span className="animate-spin">🔄</span> : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
