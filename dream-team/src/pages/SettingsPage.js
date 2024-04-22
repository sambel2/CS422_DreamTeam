import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/SettingsPage.css';
import profileIcon from '../images/profile_icon.png';

const YourComponent = () => {
  return (
    <div>
      <header className="tools-header">
        <div></div>
        <div className="right-icons">
          <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
        </div>
      </header>

      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-box">Account</div>
        <div className="settings-box">Notifications</div>
        <div className="settings-box">Language</div>
        <div className="settings-box">Accessibility</div>
        <div className="settings-box">Support</div>
        <div className="settings-box">Terms & Conditions</div>
        <div className="settings-box">Privacy Policy</div>
        <div className="settings-box">Log out</div>
      </div>

      <nav className="bottom-nav">
        <Link to="/tools">Tools</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </div>
  );
};

export default YourComponent;
