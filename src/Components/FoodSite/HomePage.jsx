import React, { useState } from 'react'
import Navbar from './Navbar'
import Container from './Container'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'


const HomePage = () => {
  const [isDark, setDark] = useState(false);
  return (
    <div className={`home w-full min-h-screen bg-slate-200 ${isDark ? 'dark' : ''}`}>
      <Navbar isDark={isDark} setDark={setDark}/>
      <Container />
      <Menu />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default HomePage