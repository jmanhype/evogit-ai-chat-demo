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
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div
        style={{
          flex: 1,
          padding: '1rem',
          overflowY: 'auto',
          border: '1px solid #ccc',
          backgroundColor: '#f4f4f9'
        }}
      >
        {messages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '0.5rem' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'AI'}</strong>: {msg.text}
            <span style={{ marginLeft: '1rem', fontSize: '0.8em', color: '#666' }}>{new Date(msg.timestamp).toLocaleTimeString()}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          display: 'flex',
          padding: '1rem',
          border: '1px solid #ccc'
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          style={{ flex: 1, marginRight: '0.5rem' }}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default App;