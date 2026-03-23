import React from 'react';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar';

const Home = () => <div className="container mt-4">Home Page</div>;

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
      </Routes>
    </Router>
  );
};

export default App;