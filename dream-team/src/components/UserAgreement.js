import React from 'react';
import userAgreement from '../Misc/user-agreement.txt';

const UserAgreement = () => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    fetch(userAgreement)
      .then((response) => response.text())
      .then((text) => setContent(text));
  }, []);

  return <div style={{ whiteSpace: 'pre-wrap', padding: '20px', lineHeight: '1.6' }}>{content}</div>;
};

export default UserAgreement;
