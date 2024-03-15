import React, { useState } from 'react';
import AlarmForm from '../components/AlarmForm';
import Schedule from '../components/Schedule';
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';
import graphImage from '../images/graph.png'; 
import { Link } from 'react-router-dom';
import '../styling/TrackingPage.css'; 

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
                <div className="right-icons">
                    <Link to="/profile"><img src={profileIcon} alt="Profile" /></Link>
                    <Link to="/settings"><img src={settingsIcon} alt="Settings" /></Link>
                </div>
            </header>

            <main className="main-content">
                <h1>Tracking</h1>
                <section className="alarm-section">
                    <AlarmForm addAlarm={addAlarm} />
                    <Schedule alarms={alarms} />
                </section>
                <section className="schedule-section">
                    <h2>Alarm Statistics</h2>
                    <img src={graphImage} alt="Graph" className ="graph"/>  
                </section>
            </main>

            <nav className="bottom-nav">
                <Link to="/tools">Tools</Link>
                <Link to="/tracking">Tracking</Link>
                <Link to="/resources">Resources</Link>
            </nav>
        </div>
    );
};



export default TrackingPage;
