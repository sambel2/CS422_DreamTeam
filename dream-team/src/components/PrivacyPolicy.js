import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import privacyPolicy from '../Misc/privacy-policy.txt';

const PrivacyPolicy = () => {
  const [content, setContent] = React.useState('');
  const navigate = useNavigate(); 

  React.useEffect(() => {
    fetch(privacyPolicy)
      .then(response => response.text())
      .then(text => setContent(text));
  }, []);

  // to navigate back to prev pg
  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div style={{ padding: '20px', lineHeight: '1.6', textAlign: 'center' }}>
      <div style={{ whiteSpace: 'pre-wrap' }}>{content}</div>
      <button 
        onClick={handleGoBack} 
        style={{ fontSize: '20px', color: 'blue', marginTop: '20px', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
      >
        Go Back
      </button>
    </div>
  );
};

export default PrivacyPolicy;
