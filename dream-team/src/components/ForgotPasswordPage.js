import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //password reset logic
    console.log('Password reset request for:', userInput);
    setMessage('If the account exists, a password reset link has been sent to your email.');
    //reset userInput or navigate to a confirmation page
  };

  // navigate back
  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="forgot-password-page">
      <h1>Forgot Password</h1>
      <p>Enter your email or username and we'll send you a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleGoBack} style={{ marginTop: '20px', background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
        Go Back
      </button>
    </div>
  );
};

export default ForgotPasswordPage;