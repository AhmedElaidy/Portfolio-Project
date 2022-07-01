import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImg2 from '../components/HeroImg2'
import AboutContent from '../components/AboutContent'


const about = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading='About' text={`i'm a front-end developer`}/>
    <AboutContent/>
    <Footer/>
    </div>
  )
}

export default about