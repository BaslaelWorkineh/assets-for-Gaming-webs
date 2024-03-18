import React from 'react'
import './cardOne.css'
import img from '../imgs/landing-home-img-1.jpg'

function Card() {
  return (
    <div className='cardOneContainer'>
      <img src={img}/>
      <div className='title'>
        <p>01</p>
      <h1>Main Home</h1>
      </div>
      
    </div>
  )
}

export default Card
