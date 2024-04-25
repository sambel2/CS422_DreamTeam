import React from 'react';
import '../styling/ScheduleCSS.css'; 

const Schedule = ({ alarms }) => {
    return (
        <div className="schedule">
            <h2>Your Sleep Schedule</h2>
            <ul className="subpart">
                {alarms.map((alarm, index) => (
                    <li key={index}>
                        <strong>{alarm.date}</strong>: {alarm.hours} hours
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;
