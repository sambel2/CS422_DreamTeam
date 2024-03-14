import React from 'react'; 
import '../styling/Tools.css'; 
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';
import { Link } from 'react-router-dom';

const ToolsPage = () => {
  return <div>
    <div className = "tools-container">    
      <header className="home-header">
        <div className="right-icons">
            <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
            <Link to="/settings"><img src={settingsIcon} alt="Settings" /></Link>
        </div>
      </header>

      <ul className = "flex-list">
      <li><label for = "set-alarms">Set Alarms</label></li>
      <li><label for = "calming-sounds">Calming Sounds</label></li>
      <li><label for = "audio-books">Audio Books</label></li>
      </ul>
    </div>

    </div>;
};
/* links to Alarms, calming sounds, audio books, meditation */
export default ToolsPage;
