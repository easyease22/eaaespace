
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import CheckPage from './CheckPage';

function EaseSpaceApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<CheckPage />} />
      </Routes>
    </Router>
  );
}

export default EaseSpaceApp;
