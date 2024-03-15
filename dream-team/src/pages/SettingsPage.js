import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/SettingsPage.css';
import profileIcon from '../images/profile_icon.png';

const YourComponent = () => {
  return (
    <div>
      <header className="home-header">
        <div></div>
        <div className="right-icons">
          <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
        </div>
      </header>

      <div className="container">
        <h1>Settings</h1>
        <div className="box">Account</div>
        <div className="box">Notifications</div>
        <div className="box">Language</div>
        <div className="box">Accessibility</div>
        <div className="box">Support</div>
        <div className="box">Terms & Conditions</div>
        <div className="box">Privacy Policy</div>
        <div className="box">Log out</div>
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
