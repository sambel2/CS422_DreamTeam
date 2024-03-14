import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import Home from './pages/Home';


const initializeDummyAccount = () => {
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const dummyUser = { username: 'user', password: 'password' };

  // check if the dummy user already exists to avoid duplicates
  if (!users.some(user => user.username === dummyUser.username)) {
    users.push(dummyUser);
    localStorage.setItem('users', JSON.stringify(users));
  }
};

function App() {
  // useEffect to initialize the dummy account
  useEffect(() => {
    initializeDummyAccount();
  }, []);  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/home" element={<Home />} />
          {/* all other pages belong to us - place here you nerds*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
