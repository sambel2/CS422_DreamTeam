import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Home.css'; 
import achievementImage from '../images/trophy.png'; 
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';
import logoImage from '../images/dreamteam.png'; 

/* home info, note the achievements is not yet set - prototype*/
const Home = () => {
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
                <img src={logoImage} alt="Dream Team" className="logo" />
                <section className="achievement-section">
                    <img src={achievementImage} alt="Achievements" />
                    <p>Daily Achievements</p>
                    <button>Click To Unlock More Achievements</button>
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

export default Home;
