import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import userAgreement from '../Misc/user-agreement.txt';

const UserAgreement = () => {
  const [content, setContent] = React.useState('');
  const navigate = useNavigate(); // init & using to go back pages

  React.useEffect(() => {
    fetch(userAgreement)
      .then(response => response.text())
      .then(text => setContent(text));
  }, []);

  // to navigate back ti prv pg
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

export default UserAgreement;
