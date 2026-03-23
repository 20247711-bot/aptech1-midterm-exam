import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Signup from './pages/Signup';
import Home from './pages/Home';
import Success from './pages/Success';
import Profile from './pages/Profile';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Success" element={<Success />} />
      </Routes>
    </Router>
  );
};

export default App;