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
        <left><Link to="/home"><img src={homeIcon} alt="Home" style={{ width: '50px', height: '50px' }} /></Link></left>
      </div>
      <div className="right-icons">
        <right><Link to="/profile"><img src={profileIcon} alt="Profile" style={{ width: '50px', height: '50px' }} /></Link></right>
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
    <pr></pr>
    <BottomNav/>
    </div>
  );
};

export default YourComponent;