import React, { useState } from 'react';
import '../styling/AlarmForm.css'; 

const AlarmForm = ({ addAlarm }) => {
    // State to store form inputs
    const [date, setDate] = useState('');
    const [hours, setHours] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!date || !hours) return; // Prevent adding empty alarms
        addAlarm({ date, hours }); // Pass new alarm data to parent component
        setDate(''); // Reset form inputs after submission
        setHours('');
    };

    return (
        <div className="alarm-form">
            <h2>Log Your Sleep Pattern</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="date" class="label-left">Date:</label>
                    <input 
                        type="text" 
                        id="date" 
                        value={date} 
                        onChange={(e) => setDate(e.target.value)} 
                        placeholder="(MM/DD/YYYY)" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="hours" class="label-left2">Hours:</label>
                    <input 
                        type="text" 
                        id="hours" 
                        value={hours} 
                        onChange={(e) => setHours(e.target.value)} 
                        placeholder="Enter sleep hours" 
                    />
                </div>
                <button type="submit" class="alarm-button">Log Hours</button>
            </form>
        </div>
    );
};

export default AlarmForm;
