import React, { useState, useEffect, useRef } from 'react';
import AlarmForm from '../components/AlarmForm';
import Schedule from '../components/Schedule';
import profileIcon from '../images/profile_icon.png';
import trackingNameIcon from '../images/tracking_name_icon.png';

import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto'; // Import Chart.js -type in command line: npm install chart.js
import '../styling/TrackingPage.css';
import BottomNav from '../components/BottomNav';
import homeIcon from '../images/Home Icon.png';

const TrackingPage = () => {
    const [alarms, setAlarms] = useState([]);
    const chartRef = useRef(null); // Reference to the Chart instance

    const addAlarm = (newAlarm) => {
        setAlarms([...alarms, newAlarm]);
    };

    const updateGraph = () => {
        const ctx = document.getElementById('myChart').getContext('2d');

        if (chartRef.current) {
            chartRef.current.destroy(); // Destroy existing chart if it exists
        }

        const labels = alarms.map(alarm => alarm.date);
        const data = alarms.map(alarm => alarm.hours);

        // Create new chart instance
        chartRef.current = new Chart(ctx, {
            type: 'line', // Specify line chart
            data: {
                labels: labels,
                datasets: [{
                    label: 'Sleep Pattern',
                    data: data,
                    fill: false, // Don't fill the area under the line
                    borderColor: 'rgba(202, 96, 127, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    };

    useEffect(() => {
        updateGraph();
        return () => {
            // Clean up when component unmounts
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [alarms]);

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
                <h1><img src={trackingNameIcon} alt="Tracking" className="tracking-icon" /></h1>
                <section className="alarm-section">
                    <AlarmForm addAlarm={addAlarm} />
                    <Schedule alarms={alarms} />
                </section>
                <section className="schedule-section">
                    <h2>Sleep Statistics</h2>
                    <canvas id="myChart" width="400" height="200"></canvas>
                </section>
            </main>
            <p></p>
            <BottomNav />
        </div>
    );
};

export default TrackingPage;