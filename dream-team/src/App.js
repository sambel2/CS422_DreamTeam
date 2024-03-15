import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import Home from './pages/Home';
import ToolsPage from './pages/ToolsPage'; 
import ResourcesPage from './pages/ResourcesPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import SignUpPage from './pages/SignUpPage';
import UserAgreement from './components/UserAgreement';
import PrivacyPolicy from './components/PrivacyPolicy';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import TrackingPage from './pages/TrackingPage';

// used to create a dummy account only
const initializeDummyAccount = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const dummyUser = { username: 'user', password: 'password' };

  // check if the dummy user already exists to avoid duplicates
  if (!users.some(user => user.username === dummyUser.username)) {
    users.push(dummyUser);
    localStorage.setItem('users', JSON.stringify(users));
  }
};

function App() {
  // useEffect to initialize the dummy account
  useEffect(() => {
    initializeDummyAccount();
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/create-account" element={<SignUpPage />} />
          <Route path="/user-agreement" element={<UserAgreement />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          {/* all other pages belong to us - place here you nerds*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
