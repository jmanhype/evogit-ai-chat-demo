// App.jsx
import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user', timestamp: new Date().toISOString() }]);
      setInput('');
      fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: input })
      }).then(() => {
        // Fetch AI response after sending user message
        fetch('/api/response').then(response => response.json()).then(data => {
          setMessages(prevMessages => [...prevMessages, { text: data.response, sender: 'AI', timestamp: new Date().toISOString() }]);
        });
      });
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Sidebar messages={messages} />
      <div
        style={{
          flex: 1,
          padding: '1rem',
          backgroundColor: '#f4f4f4'
        }}
      >
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>{message.sender} - {new Date(message.timestamp).toLocaleTimeString()}</strong>
            <p>{message.text}</p>
          </div>
        ))}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={{
            width: '100%',
            padding: '0.5rem',
            margin: '0.5rem 0',
            border: '1px solid #ccc'
          }}
        />
        <button onClick={handleSend} style={{ padding: '0.5rem', backgroundColor: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
}

function Sidebar({ messages }) {
  return (
    <div style={{ width: '20%', padding: '1rem', backgroundColor: '#333', color: '#fff' }}>
      <h4>Conversation History</h4>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {messages.map((message, index) => (
          <li key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>{message.sender}</strong> - {new Date(message.timestamp).toLocaleTimeString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;