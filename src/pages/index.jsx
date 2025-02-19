import { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useRouter } from 'next/router';

const socket = io('http://localhost:5000');

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState('');
    const router = useRouter();

    const userId = localStorage.getItem('userId');
    const userName = localStorage.getItem('userName');

    useEffect(() => {
        if (!userName) router.push('/login');

        socket.emit('joinRoom', { userId, userName });

        socket.on('messageHistory', (data) => {
            setMessages(data);
        });

        socket.on('receiveMessage', (newMessage) => {
            setMessages((prev) => [...prev, newMessage]);
        });

        return () => socket.off();
    }, [userName]);

    const sendMessage = () => {
        if (!message.trim()) return;

        socket.emit('sendMessage', {
            userId,
            userName,
            messageBody: message,
        });

        setMessage('');
    };

    const handleLogout = () => {
        localStorage.removeItem('userId');
        localStorage.removeItem('userName');
        router.push('/login');
    };

    return (
        <div>
            <h1>Group Chat</h1>
            <div>
                {messages.map((msg) => (
                    <div key={msg._id}>
                        <strong>{msg.userName}</strong>: {msg.messageBody} | {new Date(msg.createdAt).toLocaleTimeString()}
                    </div>
                ))}
            </div>
            <input value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
