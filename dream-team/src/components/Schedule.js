import React from 'react';

const Schedule = ({ alarms }) => {
    return (
        <div className="schedule">
            <h2>Your Daily Schedule</h2>
            <ul>
                {alarms.map((alarm, index) => (
                    <li key={index}>
                        <strong>{alarm.time}</strong>: {alarm.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Schedule;
