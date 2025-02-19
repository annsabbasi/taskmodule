import PropTypes from 'prop-types';



function MessageList({ messages }) {
    return (
        <div className="chat-messages">
            {messages.map((msg) => (
                <div key={msg._id} className="chat-message">
                    <strong>{msg.userName}</strong>: {msg.messageBody}
                    <span> ({new Date(msg.createdAt).toLocaleTimeString()})</span>
                </div>
            ))}
        </div>
    );
}

export default MessageList;

MessageList.propTypes = {
    messages: PropTypes.string.isRequired,
};
