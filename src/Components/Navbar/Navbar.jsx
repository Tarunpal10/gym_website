import React from 'react'
import {Outlet, NavLink} from 'react-router-dom'
import './Navbar.scss'
import gym_logo from '../../Assets/logo.jpeg'
import logo2_main from '../../Assets/logo2.jpg'
// import { React,Fragment } from 'react'
// import gym_logo2 from '../../Assets/logo2.jpg'
// import toggle_light from '../../Assets/night.png'
// import toggle_dark from '../../Assets/day.png' 

const Navbar = () => {
  return (
   <>
    <nav>
        <img src={logo2_main} alt="" className='logo' />
        <h2>The <p> GYM</p></h2>
        <ul>
          <div className="menu">
            <span></span>
            <span></span>
            <span></span>
          </div>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About</NavLink>
            </li>
            <li>
              <NavLink to='testimonial'>Testimonials</NavLink>
            </li>
            <li>
              <NavLink to='machine'>Machines</NavLink>
            </li>
            <li>
              <NavLink to='plan'>Plans</NavLink>
            </li>
            <li>
              <NavLink to='contact'>Contact</NavLink>
            </li>
        </ul>
        
    </nav>
    <Outlet/>

   </>
  )
}

export default Navbar
