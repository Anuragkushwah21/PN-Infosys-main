import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Message() {
  const [messages, setMessages] = useState([]); // For an array of messages
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMessages = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://pninfosysbackend.onrender.com/api/getAllMessage'); // Replace with your API endpoint
        // console.log(response.data);
        setMessages(response.data.allMessage); // Assuming API response has "allMessage" array
      } catch (err) {
        setError('Failed to fetch messages.');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {messages.length > 0 && (
        <div>
          {messages.map((message, index) => (
            <div 
              key={index} 
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                margin: '8px 0',
                backgroundColor: '#f9f9f9',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <p><strong>Name:</strong> {message.name}</p>
              <p><strong>Email:</strong> {message.email}</p>
              <p><strong>Phone:</strong> {message.phone}</p>
              <p><strong>Message:</strong> {message.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Message;
