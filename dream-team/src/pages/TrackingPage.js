import React, { useState } from 'react';
import AlarmForm from '../components/AlarmForm';
import Schedule from '../components/Schedule';
import profileIcon from '../images/profile_icon.png';
import trackingNameIcon from '../images/tracking_name_icon.png';
import graphImage from '../images/graph.png'; 
import { Link } from 'react-router-dom';
import '../styling/TrackingPage.css'; 
import BottomNav from '../components/BottomNav'; 
import homeIcon from '../images/Home Icon.png';

const TrackingPage = () => {
    // State to store alarms
    const [alarms, setAlarms] = useState([]);

    // Function to add new alarm
    const addAlarm = (newAlarm) => {
        setAlarms([...alarms, newAlarm]);
    };
    return (
        <div className="home-container">
            <header className="home-header">
                <div></div>
                <div className="left-icons">
                    <left><Link to="/home"><img src={homeIcon} alt="Home" style={{ width: '50px', height: '50px' }} /></Link></left>
                </div>
                <div className="right-icons">
                    <right><Link to="/profile"><img src={profileIcon} alt="Profile" style={{ width: '50px', height: '50px' }} /></Link></right>
                </div>
            </header>

            <main className="main-content">
                <h1><img src = {trackingNameIcon} alt = "Tracking" className="tracking-icon"/></h1>
                <section className="alarm-section">
                    <AlarmForm addAlarm={addAlarm}/>
                    <Schedule alarms={alarms} />
                </section>
                <section className="schedule-section">
                    <h2>Alarm Statistics</h2>
                    <img src={graphImage} alt="Graph" className ="graph"/>  
                </section>
            </main>
            <p></p>
            <BottomNav /> {/* for the navigation buttons */}
        </div>
    );
};


export default TrackingPage;
