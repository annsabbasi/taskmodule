import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
    const [userName, setUserName] = useState('');
    const router = useRouter();

    const handleSubmit = () => {
        const userId = localStorage.getItem('userId') || crypto.randomUUID();
        localStorage.setItem('userId', userId);
        localStorage.setItem('userName', userName);
        router.push('/');
    };

    return (
        <div>
            <h1>Join Chat</h1>
            <input value={userName} onChange={(e) => setUserName(e.target.value)} />
            <button onClick={handleSubmit}>Join</button>
        </div>
    );
}
