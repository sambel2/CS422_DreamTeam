import React from 'react';
import privacyPolicy from '../Misc/privacy-policy.txt';

const PrivacyPolicy = () => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    fetch(privacyPolicy)
      .then(response => response.text())
      .then(text => setContent(text));
  }, []);

  return <div style={{ whiteSpace: 'pre-wrap', padding: '20px', lineHeight: '1.6' }}>{content}</div>;
};

export default PrivacyPolicy;
