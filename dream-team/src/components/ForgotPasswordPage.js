import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styling/ForgotPasswordPage.css';
import forgotPasswordLogo from '../images/forgot_Password.png';

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
      <img src={forgotPasswordLogo} alt="Forgot Password" className="forgot-password-logo"/>
      <p>Enter your email or username and we'll send you a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email or Username"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
        />
        <center><button type="submit">Send Reset Link</button></center>
      </form>
      {message && <p>{message}</p>}
      <button onClick={handleGoBack} style={{ marginTop: '20px', background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
        Go Back
      </button>
    </div>
  );
};

export default ForgotPasswordPage;