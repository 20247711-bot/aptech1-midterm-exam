import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';
import Signup from './pages/Signup';
import Home from './pages/Home';


const Profile = () => (
  <div className="container mt-4">
    <h2>Profile Page</h2>
    <Form />
  </div>
);

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;