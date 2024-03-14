import React, { useState } from 'react';
import { Link, useNavigate  } from 'react-router-dom'; // install react-router-dom if you don't have it. ask sergio for help.
import '../styling/IntroPage.css';
import { login } from '../services/AuthService'; 
import logoImage from '../images/dreamteam.png'; 


const IntroPage = () => {
    const navigate = useNavigate(); // hook for navigation
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [loginError, setLoginError] = useState('');

const handleInputChange = (e) => {
    const { name, value, checked, type } = e.target;
    if (type === 'checkbox') {
        setRememberMe(checked);
    } else {
        name === 'username' ? setUsername(value) : setPassword(value);
    }
};

// handle the login for AuthServie to do logic
const handleSubmit = (e) => {
    e.preventDefault();
    
    if (login(username, password, rememberMe)) {
        console.log('Login successful');
        navigate('/home');
    } else {
        setLoginError('Login failed. Please retry username and password.' );
    }
};

return (
    <div className="intro-page">
        <img src={logoImage} alt="Dream Team Logo" style={{ maxWidth: '400px', marginBottom: '20px' }} />
        
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
            {loginError && <div style={{ color: 'red', marginTop: '10px' }}>{loginError}</div>}
        </form>
        <div className="intro-options">
            <Link to="/create-account">Create Account</Link>
            <Link to="/forgot-password">Forgot Password?</Link>
        </div>
        <p className="user-agreement"> <Link to="/user-agreement" style={{color: 'blue'}}>User Agreement</Link> and <Link to="/privacy-policy" style={{color: 'blue'}}>Privacy End User</Link></p>
    </div>
);
};
<Link to="/privacy-policy" style={{color: 'blue'}}>Privacy End User</Link>
export default IntroPage;
