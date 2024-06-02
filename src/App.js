import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import './App.css';
import Hero from './Components/Hero/Hero';
import {Route, Routes } from 'react-router-dom';
import Contact from './Components/Contact/Contact';
import Plans from './Components/Plans/Plans';
import Machines from './Components/MAchines/Machines';
import Testimonials from './Components/Testimonials/Testimonials';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Hero/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/testimonial' element={<Testimonials/>}/>
        <Route path='/machine' element={<Machines/>}/>
        <Route path='/plan' element={<Plans/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      <Footer/>

    </>
  )
}

export default App;
