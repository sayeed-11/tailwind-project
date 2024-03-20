import React from 'react'
import HomePage from './HomePage'
import Navbar from './Navbar'
import './Main.css'
import About from './About'
import Menu from './Menu'
import Products from './Products'
import Contact from './Contact'
import Footer from './Footer'

const Main = () => {
  return (
    <div className='w-full min-h-screen bg-stone-200 overflow-hidden'>
        <Navbar/>
        <HomePage/>
        <About/>
        <Menu/>
        <Products/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Main