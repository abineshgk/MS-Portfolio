import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import About from './Components/About'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
     <div>
      <Toaster position='top-center'/>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
    </>
   
  )
}

export default App
