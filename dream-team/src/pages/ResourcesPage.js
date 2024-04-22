import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/ResourcesPage.css'; 
import profileIcon from '../images/profile_icon.png';
import settingsIcon from '../images/settings_icon.png';
import resourcesNameIcon from '../images/resources_name_icon.png';
import resourcesBGIcon from '../images/resources_bg_icon.png';

const ResourcesPage = () => {
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
            <h1><img src = {resourcesNameIcon} alt = "Resources"/></h1>
            <section className="Title">
                <h3>References to Professional Help</h3>
            </section>
            <section>
                <p className="paragraph">
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                </p>
                <p className="paragraph"> 
                It has roots in a piece of classical Latin literature
                </p>
            </section>
            <section className="Title">
                <h3>Articles</h3>
            </section>
            <section className = "paragraph">    
                <p><a href="https://newsinhealth.nih.gov/2021/04/good-sleep-good-health">Good Sleep, Good Health</a></p>
                <p><a href="https://www.sleepfoundation.org/how-sleep-works/why-do-we-need-sleep">Why do we need sleep?</a></p>
                <p><a href="https://health.ucdavis.edu/blog/cultivating-health/better-sleep-why-its-important-for-your-health-and-tips-to-sleep-soundly/2023/03">Better sleep: Why it’s important for your health and tips to sleep soundly</a></p>
                <p><a href="https://www.cdc.gov/sleep/features/getting-enough-sleep.html">Are You Getting Enough Sleep?</a></p>
                <p><a href="https://sph.umich.edu/pursuit/2020posts/why-sleep-is-so-important-to-your-health.html">Sleep 101: Why Sleep Is So Important to Your Health</a></p>
            </section>
            <section className="Title">
                <h3>Videos</h3>
            </section>
            <section className = "paragraph">
                <p><a href="https://www.youtube.com/watch?v=fk-_SwHhLLc">Sleep Hygiene: Train Your Brain to Fall Asleep and Sleep Better</a></p>
                <p><a href="https://www.youtube.com/watch?v=nm1TxQj9IsQ">Master Your Sleep & Be More Alert When Awake</a></p>
                <p><a href="https://www.youtube.com/playlist?list=PLemiIdqX-t0CONUNG9yzZJObuBLeIiPKX">Sleep Music Playlist</a></p>
                <p><a href="https://www.youtube.com/watch?v=5dden6Vqj4A">White Noise for Sleep & Relaxation</a></p>
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

export default ResourcesPage;
