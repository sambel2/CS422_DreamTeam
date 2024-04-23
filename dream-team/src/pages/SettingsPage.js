import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/SettingsPage.css';
import BottomNav from '../components/BottomNav.js'; 
import profileIcon from '../images/profile_icon.png';
import homeIcon from '../images/Home Icon.png';
import SettingsTitle from '../images/Settings_Title.png';

const YourComponent = () => {
  return (
  <div className="settings-container">
    <header className="settings-header">
      <div className="left-icons">
      <Link to="/home"><img src={homeIcon} alt="Home"/></Link>
      </div>
      <div className="right-icons">
      <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
      </div>
    
    </header>
    <img src={SettingsTitle} alt="SettingsTitle" />
    <div className="settings-box">Account</div>
    <div className="settings-box">Notifications</div>
    <div className="settings-box">Language</div>
    <div className="settings-box">Accessibility</div>
    <div className="settings-box">Support</div>
    <div className="settings-box">Terms & Conditions</div>
    <div className="settings-box">Privacy Policy</div>
    <div className="settings-box">Log out</div>
    <BottomNav/>
    </div>
  );
};

export default YourComponent;