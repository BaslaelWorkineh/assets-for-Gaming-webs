import React from 'react'
import Card from '../components/cardOne'
import AwesomeSection from '../components/awesomeSection'
import Footer from '../components/Footer'
import CardSlider from '../components/cardSlider'

function Home() {
  return (
    <div style={{background:'black',alignitems: 'center',justifycontent: 'center'}}>
      <Card/>
      <AwesomeSection/>
      <CardSlider/>
      <Footer/>
    </div>
  )
}

export default Home
