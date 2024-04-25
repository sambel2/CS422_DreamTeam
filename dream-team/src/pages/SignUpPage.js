import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styling/SignUpPage.css';
import { createAccount } from '../services/AuthService';
import createTitle from '../images/create_Account.png';

const SignUpPage = () => {  
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        birthdate: '',
        email: '', 
        isStudent: false,
        schedule: '',
        employment: '',
        drives: false,
        agreeToTerms: false,
    });

    const [error, setError] = useState('');

    const [birthdateError, setBirthdateError] = useState('');


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    // Function to calculate age
    const calculateAge = (birthdate) => {
        const birthday = new Date(birthdate);
        const today = new Date();
        let age = today.getFullYear() - birthday.getFullYear();
        const m = today.getMonth() - birthday.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
            age--;
        }
        return age;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBirthdateError(''); // reset birthdate error on each submission attempt
        setError('');
        // check for specific req here
        const age = calculateAge(formData.birthdate);
        if (age < 18) {
            setError('You must be 18 years or older to use this app.');
            return;
        }

        if (!formData.agreeToTerms) {
            setError('You must agree to the user agreement and privacy policy to continue.');
            return;
        }
        // handles the logic to save account data
        const success = createAccount(formData);
        if (success) {
            navigate('/');
        } else {
            setError('Failed to create an account. Please try a different username.');
        }
    };


    // navigate back
    const handleGoBack = () => {
        navigate(-1); 
    };

    return (
        <div className="sign-up-page">
            <img src={createTitle} alt="title"/>
            <form onSubmit={handleSubmit} className="sign-up-form">
                {/* Basic account information */}
                <input name="username" type="text" placeholder="Username*" value={formData.username} onChange={handleInputChange} required />
                <input name="password" type="password" placeholder="Password*" value={formData.password} onChange={handleInputChange} required />
                
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <span style={{fontSize: '12px', marginRight: '5px'}}>Enter date of birth:</span>
                    <input name="birthdate" type="date" value={formData.birthdate} onChange={handleInputChange} required />
                </div>
                {birthdateError && <div style={{ color: 'red' }}>{birthdateError}</div>}

                <input name="email" type="email" placeholder="Email (Optional)" value={formData.email} onChange={handleInputChange} />
                
                {/* Additional survey questions */}
                <label>
                    <input name="isStudent" type="checkbox" checked={formData.isStudent} onChange={handleInputChange} />
                     Are you a college student? (Optional)
                </label>
                <select name="schedule" value={formData.schedule} onChange={handleInputChange}>
                    <option value="">Select your typical schedule (Optional)</option>
                    <option value="morning">Morning classes</option>
                    <option value="afternoon">Afternoon classes</option>
                    <option value="evening">Evening classes</option>
                    <option value="irregular">Irregular/online classes</option>
                </select>
                <select name="employment" value={formData.employment} onChange={handleInputChange}>
                    <option value="">Do you work? (Optional)</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="not-working">Not currently working</option>
                </select>
                <label>
                    <input name="drives" type="checkbox" checked={formData.drives} onChange={handleInputChange} />
                    Do you commute by driving? (Optional)
                </label>
                <label>
                    <input name="agreeToTerms" type="checkbox" checked={formData.agreeToTerms} onChange={handleInputChange} required />
                    I agree to the <Link to="/user-agreement" style={{color: 'blue'}}>User Agreement</Link> and <Link to="/privacy-policy" style={{color: 'blue'}}>Privacy Policy</Link>
                </label>

                {/* <button type="submit">Create Account</button> */}
                <button type="submit" className="signup-button">Create Account</button>
                {error && <div style={{ color: 'red'}}>{error}</div>}
            </form>
            <button onClick={handleGoBack} style={{  background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}>
                Go Back
            </button>
        </div>
    );
};

export default SignUpPage;