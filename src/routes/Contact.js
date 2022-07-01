import React from 'react'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Navbar from '../components/Navbar'



const about = () => {
  return (
    <div>
    <Navbar/>
    <HeroImg2 heading='Contact' text={`get in touch with me`} />
    <Footer/>
    </div>
  )
}

export default about