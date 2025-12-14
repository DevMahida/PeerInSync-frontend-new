import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./javaScript/ScrollToTop";
import useOffcanvasCleanup from "./javaScript/useOffcanvasCleanup";

import Home from './home/home.jsx';
import Register from './registration_form/Registration.jsx';
import Login from './Login/Login.jsx';
import About from './about/About.jsx';
import Help from './help/Help.jsx';

function AppRoutes() {
  useOffcanvasCleanup();

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/About' element={<About />} />
        <Route path='/Help' element={<Help />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
