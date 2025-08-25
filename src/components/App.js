// App.js
import React, { useState } from 'react';
import ChatSidebar from './ChatSidebar';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
      <ChatSidebar />
    </div>
  );
}

export default App;