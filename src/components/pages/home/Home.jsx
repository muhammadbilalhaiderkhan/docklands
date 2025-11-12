import React from 'react'
import Navbar from '../../Navbar/Navbar'
import HeroSection from '../../herosection/HeroSerction'
import Footer from '../../footer/Footer'
import AboutUs from '../../about/About'
import Services from '../../servicers/Services'
import Testimonial from '../../../Testemonial/Testemonial'

function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <Services />
    <AboutUs />
    <Testimonial />
    <Footer />
    </>
  )
}

export default Home