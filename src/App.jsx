import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./javaScript/ScrollToTop";
import Home from './home/home.jsx';
import Register from './registration_form/Registration.jsx';
import Login from './Login/Login.jsx';
import About from './about/About.jsx';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Registration' element={<Register/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/About' element={<About/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
