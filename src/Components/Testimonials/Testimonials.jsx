import React from 'react'
import './Testimonials.scss'
import { Tilt } from 'react-tilt'

function Testimonials() {
  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction 👽
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  return (
    <>
    <div className="testimonials">
    <div className='rubal'>
      <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <img src="https://images.hindustantimes.com/img/2021/03/30/1600x900/Rubal_Dhankar_HT_1617103401514_1617103412378.jpg" alt="" height={250} width={250}  />
      <p>" Heelo, i have workeout from 3 years and i seen there is the best Gym and the best machines "THEGYM"  "</p>
      <h2>-- Rubal Dhankar</h2>
    </Tilt>
    </div>

      
    <div className='nitin'>

    <Tilt options={defaultOptions} style={{ height: 250, width: 250 } }>
      <img src="https://tse4.mm.bing.net/th?id=OIP.yIM-VyHM7U2Frdm0P6_vhgAAAA&pid=Api&P=0&h=220" alt="" height={250} width={250} />
      <p>" Heelo, i have workeout from 4 years and i seen there is the best Gym in India  and the best machines "THEGYM"  " </p>
      <h2>-- Nitin Chandila</h2>
    </Tilt>
    </div>

    <div className='rohit'>

    <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
      <img src="https://www.aboutbiography.com/wp-content/uploads/2021/07/65303481_497240104362125_7303455009647860180_n1.jpg" alt="" height={250} width={250} />
      <p>" Heelo, i have workeout from 3 years and i seen there is the best Gym and the best machines "THEGYM"  "</p>
      <h2>-- Rohit Khatri</h2>

    </Tilt>
    </div>


      </div>
    </>
  )
}

export default Testimonials
