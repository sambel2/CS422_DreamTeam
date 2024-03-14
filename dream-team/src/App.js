import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import IntroPage from './pages/IntroPage'; // Adjust the path based on your structure
// going to import other pages like LoginPage, CreateAccountPage, etc.

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IntroPage />} />
          {/* define other routes for login, create account, here etc. */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
