import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        {/* Add a default route to handle the root path */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
