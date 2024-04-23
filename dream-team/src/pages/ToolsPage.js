import React from 'react'; 
import '../styling/Tools.css'; 
import profileIcon from '../images/profile_icon.png';

/*
import playButton from '../images/play_button.png';
import fastFoward from '../images/fast_forward.png';
import rewindButton from '../images/rewind-button.png';
*/
import BottomNav from '../components/BottomNav.js';
import AlarmIcon from '../images/Alarm Icon.png';
import MusicIcon from '../images/Music Icon.png';
import ReadIcon from '../images/Reading Icon.png';
import PlayerIcon from '../images/Player Icon.png';
import MeditationIcon from '../images/Meditation Icon.png';
import VideoIcon from '../images/Video Icon.png';
import SleepSounds from '../Misc/SleepSounds.mp3';

import { Link } from 'react-router-dom';

const ToolsPage = () => {
  return (

    <div className = "tools-container">   
      <header className="tools-header">
          <div></div>
          <div className="right-icons">
              <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
          </div>
      </header> 
          <h1>TOOLS</h1>
    <div className="tools-box">
      <div className="tools-content">
        <h2>Set Alarms</h2>
          <select id="times">
            <option value="1am">1 am</option>
            <option value="2am">2 am</option>
            <option value="3am">3 am</option>
            <option value="4am">4 am</option>
            <option value="5am">5 am</option>
            <option value="6am">6 am</option>
            <option value="7am">7 am</option>
            <option value="8am">8 am</option>
            <option value="9am">9 am</option>
            <option value="10am">10 am</option>
            <option value="11am">11 am</option>
            <option value="12am">12 am</option>
          </select>
      </div>
        <img src={AlarmIcon} alt="Alarm" className="box-icon" />
    </div>
  
    <div class="tools-box">
      <div className='tools-content'>
        <h2>White Noise & Sleep Sounds</h2>
        <audio className="audio-player" controls>
          <source src={SleepSounds} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
      <img src={MusicIcon} alt="Alarm" className="box-icon" />
    </div>
   
      <div class="tools-box">
        <div className='tools-content'>
          <h2>Read Aloud</h2>
          <img src={PlayerIcon} alt="Player" classname="player"/>
        </div>
      <img src={ReadIcon} alt="ReadAloud" className="box-icon"/>
      </div>

     <div class="tools-box">
      <div className='tools-content'>
        <h2>Meditation & Breathing</h2>
        <img src={VideoIcon} alt="Video" className="Video"/>
        </div>
        <img src={MeditationIcon} alt="Meditate" className="box-icon"/>
      </div> 
    
      <BottomNav/>
    </div>
    
    );
};
/*links to Alarms, calming sounds, audio books, meditation */
export default ToolsPage;
