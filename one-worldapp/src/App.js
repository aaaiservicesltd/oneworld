
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './About';
import Header from './common/Header';
import Footer from './common/Footer';
import Pages from './Pages';
import Contact from './Contact';
import Blog from './Blog';
import Servicepage from './Servicepage';
import Partners from './Partners';


const App = () => {
  return (


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Page" element={<Pages />} />
        <Route path="Contact" element={<Contact />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='services' element={<Servicepage />} />
        <Route path='partner' element={<Partners/>} />

      </Routes>
    </BrowserRouter>
  );
};










export default App;


