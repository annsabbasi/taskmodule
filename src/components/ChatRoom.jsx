import { useEffect, useState } from 'react';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import PropTypes from 'prop-types';


function ChatRoom({ userName, userId, socket, handleLogout }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        socket.on('messageHistory', (history) => {
            setMessages(history);
        });

        socket.on('receiveMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });

        return () => {
            socket.off('messageHistory');
            socket.off('receiveMessage');
        };
    }, [socket]);

    return (
        <div className="chat-room">
            <div className="chat-header">
                <h3>Welcome, {userName}</h3>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <MessageList messages={messages} />
            <MessageInput socket={socket} userName={userName} userId={userId} />
        </div>
    );
}

export default ChatRoom;


ChatRoom.propTypes = {
    userName: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    socket: PropTypes.object.isRequired,
    handleLogout: PropTypes.func.isRequired,
};
