import React from 'react'; 
import '../styling/Tools.css'; 
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';
import { Link } from 'react-router-dom';

const ToolsPage = () => {
  return <div>
    
    <div className = "tools-container">    
       <header className="tools-header">
        <div></div>
        <div className="right-icons">
            <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
            <Link to="/settings"><img src={settingsIcon} alt="Settings" /></Link>
        </div>
      </header>
          <h1>Tools</h1>
    <div class="flex-list">
      <div class="box">
        <h2>Alarms</h2>
        <label for="times">Times:</label>
        <select id="times">
        <option value="1am">6 am</option>
        <option value="2am">7 am</option>
        <option value="3am">8 am</option>
        </select>
      </div>
    </div>
      
    <div class="box">
      <h2>Calming Sounds</h2>
      <img src="play_button.png" alt="Play Button" />
      <img src="rewind_button.png" alt="Rewind Button" />
      <img src="fast_forward_button.png" alt="Fast Forward Button" />
    </div>

      <div class="box">
        <h2>Audio Books</h2>
        {/* <img src="play_button.png" alt="Play Button">
        <img src="rewind_button.png" alt="Rewind Button">
        <img src="fast_forward_button.png" alt="Fast Forward Button"> */}
      </div>
      <div class="box">
        <h2>Meditation</h2>
      </div>
    </div>

    </div>;
};
/* links to Alarms, calming sounds, audio books, meditation */
export default ToolsPage;
