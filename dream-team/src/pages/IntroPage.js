import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // install react-router-dom if you don't have it. Sergio.
import '../styling/IntroPage.css';

const IntroPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        if (type === 'checkbox') {
            setRememberMe(checked);
        } else {
            name === 'username' ? setUsername(value) : setPassword(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // placeholder for authentication logic
        console.log('Submitted', { username, password, rememberMe });
        // typically handle login here, e.g., call a backend service
    };

    return (
        <div className="intro-page">
            <h1>Dream Team</h1>
            
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={handleInputChange}
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handleInputChange}
                />
                <label>
                    <input
                        name="rememberMe"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={handleInputChange}
                    />
                    Remember me
                </label>
                <button type="submit">Login</button>
            </form>
            <div className="intro-options">
                <Link to="/create-account">Create Account</Link>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
            <p className="user-agreement">User Agreement and Privacy End User</p>
        </div>
    );
};

export default IntroPage;
