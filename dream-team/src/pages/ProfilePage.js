import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styling/ProfilePage.css';

const ProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

   // to fetch all users
  const getUsers = () => JSON.parse(localStorage.getItem('users') || '[]');

  //to save updated users array back to localStorage
  const saveUsers = (users) => localStorage.setItem('users', JSON.stringify(users));

  // Reference to the hidden file input element
  const fileInputRef = React.useRef(null);

  //triggered when the profile image or upload button is clicked
  const triggerFileInput = () => {
    // clear the current file input value to ensure re-upload is possible
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
      fileInputRef.current.click(); //click the hidden file input to open the file dialogue
    }
  };


  const handleEditProfile = () => {
    // logic to handle profile editing for future dev
  };

  // function to render user detail
  const renderDetail = (label, value) => (
    <p>
      <strong>{label}:</strong> {value || 'Not provided'}
    </p>
  );  
  
  const handleGoBack = () => {
    navigate(-1);
  };
  

  // to edit image of user
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // restrict the file size to 5MB
    if (file.size > 5 * 1024 * 1024) {
      alert("File size must not exceed 2MB.");
      return; // Exit the function if the file is too large
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      currentUser.profileImage = reader.result;
      localStorage.setItem('currentUser', JSON.stringify(currentUser));

      const users = getUsers();
      const updatedUsers = users.map(user => user.username === currentUser.username ? currentUser : user);
      saveUsers(updatedUsers); //save updated users array to localStorage

      // Rst the file input
      if (fileInputRef.current) fileInputRef.current.value = '';
      
      window.location.reload();
    };
    reader.readAsDataURL(file);
  };

  if (!currentUser.username) {
    return (
      <div>
        <p>No user profile found. Please sign in.</p>
        <Link to="/intro">Go to Sign In</Link>
      </div>
    );
  }

  
  return (
    <div className="profile-page">
      <h1>User Profile</h1>
        <div className="profile-info">
          {/* profile Page Content */}
          <input type="file-1" ref={fileInputRef} style={{ display: 'none' }} onChange={handleImageChange} accept="image/*" id="imageUpload" />
          {/* trigger input on image or label click */}
          <div className="profile-image" onClick={triggerFileInput}>
              {currentUser.profileImage ? (
                <img src={currentUser.profileImage} alt="Profile" style={{objectFit: 'cover', width: '100%', height: '100%'}} />
              ) : (
                <label htmlFor="imageUpload" style={{cursor: 'pointer'}}>Upload Image</label>
              )}
              <input type="file" id="imageUpload" accept="image/*" onChange={handleImageChange} style={{display: 'none'}} ref={fileInputRef} />
            </div>
            {renderDetail('Username', currentUser.username)}
            {renderDetail('Email', currentUser.email)}
            {renderDetail('Birthdate', currentUser.birthdate)}
            {renderDetail('Student Status', currentUser.isStudent ? 'Yes' : 'No')}
            {renderDetail('Typical Schedule', currentUser.schedule)}
            {renderDetail('Employment Status', currentUser.employment)}
            {renderDetail('Commute by Driving', currentUser.drives ? 'Yes' : 'No')}
            {/* we can implement more profile info as needed later */}
            <p></p>
            <button onClick={handleEditProfile}>Edit Profile</button>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
      
    </div>
  );
};

export default ProfilePage;
