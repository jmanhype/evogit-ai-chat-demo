import React, { useState } from 'react';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
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