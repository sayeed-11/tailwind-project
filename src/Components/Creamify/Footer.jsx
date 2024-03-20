import React from 'react'
import img from '../../assets/iceCream/ice-background.png'
import logo from '../../assets/iceCream/logo.png'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <div className='w-full bg-white h-auto pt-[2rem] relative'>
      <div className='h-[250px] md:h-[300px] max-w-[1350px] bg-pink-300 mx-auto rounded-t-[2rem] relative'>
        <img className='absolute w-full h-full object-cover' src={img} alt="" />
        <div className='absolute w-full h-full backdrop-blur-[5px] flex flex-col justify-center items-center space-y-5'>
          <img className='w-[40%] md:w-[30%]' src={logo} alt="" />
          <div className='space-x-3 flex'>
            <motion.i whileHover={{ backgroundColor: 'white', color: 'pink' }} whileTap={{ scale: 0.80 }} className="fa-brands fa-facebook-f bg-white w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] text-pink-800 flex justify-center items-center rounded-full shadow-xl" />
            <motion.i whileHover={{ backgroundColor: 'white', color: 'pink' }} whileTap={{ scale: 0.80 }} className="fa-brands fa-youtube bg-white w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] text-pink-800 flex justify-center items-center rounded-full shadow-xl" />
            <motion.i whileHover={{ backgroundColor: 'white', color: 'pink' }} whileTap={{ scale: 0.80 }} className="fa-brands fa-twitter bg-white w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] text-pink-800 flex justify-center items-center rounded-full shadow-xl" />
            <motion.i whileHover={{ backgroundColor: 'white', color: 'pink' }} whileTap={{ scale: 0.80 }} className="fa-brands fa-instagram bg-white w-[2rem] md:w-[3rem] h-[2rem] md:h-[3rem] text-pink-800 flex justify-center items-center rounded-full shadow-xl" />
          </div>
          <div className='text-white flex gap-x-5'>
            <p><a href="#">connie@gmail.com</a></p>
            <p>•</p>
            <p>Call : 1800 893 267</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer