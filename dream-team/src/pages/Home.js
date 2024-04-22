import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/Home.css'; 
import achievementImage from '../images/trophy_Icon.png'; 
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';
import logoImage from '../images/dreamteam_logo.png'; 

/* home info, note the achievements is not yet set - prototype*/
const Home = () => {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //we can determine the image source to use if user didn't upload
    const userImageSrc = currentUser?.profileImage || profileIcon;
    

    return (
        <div className="home-container">
            <header className="home-header">
                <div></div>
                <div className="right-icons">
                    <Link to="/profile"><img src={userImageSrc} alt="Profile" style={{ width: '60px', height: '60px', borderRadius: '50%' }}/></Link>
                    <Link to="/settings"><img src={settingsIcon} alt="Settings" /></Link>
                </div>
            </header>

            <main className="main-content">
                <img src={logoImage} alt="Dream Team" className="logo" />
                <section className="achievement-section">
                    <img src={achievementImage} alt="Achievements" />
                    <p>Daily Achievements</p>
                    <button>Unlock More Achievements</button>
                </section>
            </main>

            <nav className="bottom-nav">
                <Link to="/tools" className="tools">
                    <span>Tools</span>
                </Link>
                <Link to="/tracking" className="tracking">
                    <span>Tracking</span>
                </Link>
                <Link to="/resources" className="resources">
                    <span>Resources</span>
                </Link>
            </nav>
        </div>
    );
};

export default Home;
