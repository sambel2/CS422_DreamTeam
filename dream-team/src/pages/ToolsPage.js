import React, {useState} from 'react'; 
import '../styling/Tools.css'; 
import profileIcon from '../images/profile_icon.png';
import BottomNav from '../components/BottomNav.js';
import AlarmIcon from '../images/Alarm Icon.png';
import MusicIcon from '../images/Music Icon.png';
import ReadIcon from '../images/Reading Icon.png';
import MeditationIcon from '../images/Meditation Icon.png';
import SleepSounds from '../Misc/SleepSounds.mp3';
import homeIcon from '../images/Home Icon.png';

import { Link } from 'react-router-dom';

const ToolsPage = () => {
  const [selectedValue, setSelectedValue] = useState('');

  const getVideoUrl = () => {
    switch (selectedValue) {
      case 'Odyssey':
        return 'https://www.youtube.com/embed/NEw4yAHN2Hc';
      case 'Coraline':
        return 'https://www.youtube.com/embed/j00LOvsO8OU';
      case 'Algernon':
        return 'https:/www.youtube.com/embed/SHWted1RUmE';
      default:
        return '';
    }
  };

  const handleDropdownChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (

    <div className = "tools-container">   
      <header className="tools-header">
          <div></div>
            <div className="left-icons">
                <Link to="/home"><img src={homeIcon} alt="Home" style={{ width: '50px', height: '50px' }} /></Link>
            </div>
            <div className="right-icons">
                <Link to="/profile"><img src={profileIcon} alt="Profile" style={{ width: '50px', height: '50px' }} /></Link>
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
          <select value={selectedValue} onChange={handleDropdownChange}>
            <option value="">Select a Book</option>
            <option value="Odyssey">The Odyssey</option>
            <option value="Coraline">Coraline</option>
            <option value="Algernon">Flowers for Algernon</option>
          </select>
        <iframe
          width="40%"
          height="auto"
          src={getVideoUrl()}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
      <img src={ReadIcon} alt="ReadAloud" className="box-icon"/>
      </div>
      
     <div class="tools-box">
      <div className='tools-content'>
        <h2>Meditation & Breathing</h2>
        <iframe
          width="40%"
          height="auto"
          src= 'https://www.youtube.com/embed/U9YKY7fdwyg'
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        </div>
        <img src={MeditationIcon} alt="Meditate" className="box-icon"/>
      </div> 
      <p></p>
      <p></p>
      <BottomNav/>
    </div>
    
    );
};
/*links to Alarms, calming sounds, audio books, meditation */
export default ToolsPage;
