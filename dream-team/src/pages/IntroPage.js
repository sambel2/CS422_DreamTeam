import React from 'react';
import { Link } from 'react-router-dom'; // npm install react-router-dom in case anyone needs to install it
import '../styling/IntroPage.css'; // styling for pg

const IntroPage = () => {
    return (
        <div className="intro-page">
            <h1>Dream Team</h1>
            <p>User Agreement and Privacy End User</p>
            <div className="intro-options">
                <Link to="/login">Login</Link>
                <Link to="/create-account">Create Account</Link>
                <Link to="/forgot-password">Forgot Password?</Link>
            </div>
        </div>
    );
};

export default IntroPage;
