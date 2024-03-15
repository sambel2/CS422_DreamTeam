import React, { useState } from 'react';

const AlarmForm = ({ addAlarm }) => {
    // State to store form inputs
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!time || !description) return; // Prevent adding empty alarms
        addAlarm({ time, description }); // Pass new alarm data to parent component
        setTime(''); // Reset form inputs after submission
        setDescription('');
    };

    return (
        <div className="alarm-form">
            <h2>Add New Alarm</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="time">Time:</label>
                    <input 
                        type="text" 
                        id="time" 
                        value={time} 
                        onChange={(e) => setTime(e.target.value)} 
                        placeholder="Enter alarm time" 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <input 
                        type="text" 
                        id="description" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)} 
                        placeholder="Enter alarm description" 
                    />
                </div>
                <button type="submit">Add Alarm</button>
            </form>
        </div>
    );
};

export default AlarmForm;
