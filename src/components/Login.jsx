import { useState } from 'react';
import PropTypes from 'prop-types';

function Login({ handleLogin }) {
    const [name, setName] = useState('');

    return (
        <div className="login-container">
            <h2>Join Chat</h2>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <button onClick={() => handleLogin(name)}>Join</button>
        </div>
    );
}

export default Login;


Login.propTypes = {
    handleLogin: PropTypes.string.isRequired,
};