// ChatSidebar.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ChatSidebar.css';

/**
 * ChatSidebar component displays a collapsible sidebar with chat history
 * @param {Object} props - Component props
 * @param {Array} props.conversations - Array of conversation objects
 * @param {Function} props.onSelectConversation - Callback when a conversation is selected
 * @returns {JSX.Element} ChatSidebar component
 */
function ChatSidebar({ conversations = [], onSelectConversation = () => {} }) {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  const handleSelect = (conversationId) => {
    setSelectedId(conversationId);
    onSelectConversation(conversationId);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`chat-sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <h2>Conversations</h2>
        <button
          onClick={toggleSidebar}
          className="toggle-button"
          aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
        >
          {isOpen ? '◀' : '▶'}
        </button>
      </div>

      {isOpen && (
        <div className="sidebar-content">
          {conversations.length === 0 ? (
            <p className="no-conversations">No conversations yet</p>
          ) : (
            <ul className="conversation-list">
              {conversations.map((conversation) => (
                <li
                  key={conversation.id}
                  className={`conversation-item ${selectedId === conversation.id ? 'selected' : ''}`}
                  onClick={() => handleSelect(conversation.id)}
                >
                  <div className="conversation-title">
                    {conversation.title || 'Untitled Conversation'}
                  </div>
                  <div className="conversation-date">
                    {conversation.date ? new Date(conversation.date).toLocaleDateString() : ''}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

ChatSidebar.propTypes = {
  conversations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      date: PropTypes.string,
    })
  ),
  onSelectConversation: PropTypes.func,
};

export default ChatSidebar;
