import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/home.jsx';
import Register from './registration_form/Registration.jsx';
import Login from './Login/Login.jsx';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Registration' element={<Register />} />
          <Route path='/Login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
