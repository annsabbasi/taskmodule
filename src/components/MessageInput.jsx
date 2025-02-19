import { useState } from 'react';
import PropTypes from 'prop-types';

function MessageInput({ socket, userName, userId }) {
    const [message, setMessage] = useState('');

    const sendMessage = () => {
        if (!message.trim()) return;
        socket.emit('sendMessage', { userId, userName, messageBody: message });
        setMessage('');
    };

    return (
        <div className="chat-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default MessageInput;


MessageInput.propTypes = {
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    socket: PropTypes.object.isRequired,
};