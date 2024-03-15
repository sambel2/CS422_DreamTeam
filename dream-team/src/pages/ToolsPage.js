import React from 'react'; 
import '../styling/Tools.css'; 
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';

import playButton from '../images/play_button.png';
import fastFoward from '../images/fast_forward.png';
import rewindButton from '../images/rewind-button.png';

import { Link } from 'react-router-dom';

const ToolsPage = () => {
  return <div>
    <header className="tools-header">
        <div></div>
        <div className="right-icons">
            <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
            <Link to="/settings"><img src={settingsIcon} alt="Settings" /></Link>
        </div>
      </header>
    <div className = "tools-container">    
          <h1>Tools</h1>
      <div class="box">
        <h2>Alarms</h2>
        <label for="times">Times:</label>
        <select id="times">
        <option value="1am">6 am</option>
        <option value="2am">7 am</option>
        <option value="3am">8 am</option>
        </select>
    </div>
      
    <div class="box">
      <h2>Calming Sounds</h2>
      <img src={playButton} alt="Play Button"/>
        <img src={rewindButton} alt="Rewind Button"/>
        <img src={fastFoward} alt="Fast Forward Button"/>
    </div>

      <div class="box">
        <h2>Audio Books</h2>
        <img src={playButton} alt="Play Button"/>
        <img src={rewindButton} alt="Rewind Button"/>
        <img src={fastFoward} alt="Fast Forward Button"/>
      </div>
      <div class="box">
        <h2>Meditation</h2>
      </div>
    </div>
    <nav className="bottom-nav">
        <Link to="/tools">Tools</Link>
        <Link to="/tracking">Tracking</Link>
        <Link to="/resources">Resources</Link>
      </nav>
    </div>;
};
/* links to Alarms, calming sounds, audio books, meditation */
export default ToolsPage;
