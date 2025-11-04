// App.js
import React, { useState, useEffect } from 'react';
import ChatSidebar from './ChatSidebar';
import './App.css';

/**
 * Main App component for the EvoGit AI Chat Demo
 * Provides a dark mode toggle and manages conversation state
 * @returns {JSX.Element} App component
 */
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    try {
      const savedDarkMode = localStorage.getItem('darkMode');
      if (savedDarkMode !== null) {
        setDarkMode(JSON.parse(savedDarkMode));
      }
    } catch (error) {
      console.warn('Failed to load dark mode preference:', error);
    }
  }, []);

  // Save dark mode preference to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch (error) {
      console.warn('Failed to save dark mode preference:', error);
    }
  }, [darkMode]);

  // Initialize with demo conversations
  useEffect(() => {
    const demoConversations = [
      {
        id: 1,
        title: 'Welcome to EvoGit AI Chat',
        date: new Date().toISOString(),
      },
      {
        id: 2,
        title: 'Code Review Example',
        date: new Date(Date.now() - 86400000).toISOString(),
      },
    ];
    setConversations(demoConversations);
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const handleSelectConversation = (conversationId) => {
    setSelectedConversation(conversationId);
    console.log('Selected conversation:', conversationId);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <button
        onClick={handleToggleDarkMode}
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <ChatSidebar
        conversations={conversations}
        onSelectConversation={handleSelectConversation}
      />
    </div>
  );
}

export default App;