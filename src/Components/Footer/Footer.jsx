import React from 'react'
import {FaGithubSquare,FaLinkedin,FaHackerrank } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return <footer>
    
     <div className="parted">
      <div className="part1">
        <h1>TheGYM</h1>
        <p>@all right reserved</p>
      </div>
      <div className='part2'>
         <h1>Follow Us</h1>
         <a href="https://github.com/Tarunpal10" target='_blank'><FaGithubSquare /></a> <br />
         <a href="https://www.linkedin.com/in/tarun-pal10/" target='_balnk'><FaLinkedin /></a> <br />
         <a href="https://www.hackerrank.com/profile/tpal59200" target='_blank'><FaHackerrank/></a>
      </div>
     </div>



  </footer>
}

export default Footer
