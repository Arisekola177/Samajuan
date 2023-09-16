import React from 'react'
import Homebanner from '../components/Homebanner'
import Services from '../components/Services'
import About from '../components/About'
import Ceo from '../components/Ceo'
import Projects from '../components/Projects'


const Home = () => {
  
  return (
    <div >
       <Homebanner />
       <Services />
       <About />
        <Ceo />
        <Projects />
    </div>
  )
}

export default Home