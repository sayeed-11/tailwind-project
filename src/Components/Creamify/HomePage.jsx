import React, { useEffect } from 'react'
import logo1 from '../../assets/iceCream/main-img-1.png'
import logo2 from '../../assets/iceCream/main-img-2.png'
import logo3 from '../../assets/iceCream/main-img-3.png'

import { motion } from 'framer-motion'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000});
  })
  return (
    <div id='home' className='bg-pink-200 h-auto px-5 md:px-10'>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute top-5 md:top-0 w-full left-0' data-aos="fade-down">
          <path fill="#ed4d9a" fill-opacity="1" d="M0,224L48,218.7C96,213,192,203,288,213.3C384,224,480,256,576,266.7C672,277,768,267,864,229.3C960,192,1056,128,1152,133.3C1248,139,1344,213,1392,250.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>
      <div className='max-w-[1350px] h-auto mx-auto pt-48 md:pt-12 grid grid-cols-1 gap-y-10 md:grid-cols-2 gap-x-10'>
        <HomeContentLeft />
        <HomeContentRight />
      </div>
    </div>
  )
}

export default HomePage

const HomeContentLeft = () => {
  return (
    <div className='home-left flex justify-center items-center relative mt-0 md:mt-10'>
      <div className='flex justify-center items-start flex-col absolute gap-y-5 lg:gap-y-10'>
        <motion.div
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 40,
            x: { duration: 1 },
            opacity: { duration: 1 },
          }}
          className="main-title gap-y-0 flex flex-col mt-20">
          <p className='text-black/[0.7] tracking-wider'>Sweet fun, full of milk.</p>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-[900]'>Feel inside cold with our delicious <span className='text-pink-900'>ice-cream</span></h1>
        </motion.div>
        <motion.p
          initial={{ x: -700, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 40,
            x: { duration: 1, delay: 0.5 },
            opacity: { duration: 1 },
          }}
          className=' font-bold text-pink-900 text-xs lg:text-base'>Some food has looked so awful thats it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words</motion.p>
        <motion.button
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileTap={{
            scale:0.97
          }}
          transition={{
            type: 'spring',
            stiffness: 200,
            damping: 40,
            x: { duration: 1, delay: 1 },
            opacity: { duration: 1, opacity: 1 },
          }}
          className='bg-gradient-to-r from-pink-500 to-pink-900 text-white font-bold text-xs px-16 rounded-md py-3'>Buy Now</motion.button>
      </div>
    </div>
  )
}

const HomeContentRight = () => {
  return (
    <div className='mt-[11rem] md:mt-0 overflow-hidden relative'>
      <div className="ice-cream-img relative aspect-square flex justify-center">
        <img className='w-[37%] right-10 top-5 absolute rotate-[20deg]' src={logo2} alt="" data-aos="zoom-in" data-aos-delay="1500"/>
        <img className='w-[37%] left-10 top-5 absolute' src={logo3} alt="" data-aos="zoom-in" data-aos-delay="1500"/>
        <motion.div
          initial={{ scale: 0, x: 0, opacity: 0 }}
          animate={{ scale: 1, x: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 2,
            scale: { duration: 1, delay: 0.5 },
            opacity: { duration: 1, delay: 0.7 }
          }}
          className='w-3/5 relative'>
          <img className='h-full w-full absolute bottom-0' src={logo1} alt="" />
        </motion.div>
      </div>
      <motion.h1
        initial={{ scale: 0, x: 600 }}
        animate={{ scale: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 2,
          delay: 0.2,
          scale: { duration: 1 },
          x: { duration: 1, delay: 1 },
        }}
        className='shadow-text text-[6rem] font-[900] absolute w-full bottom-[-2.3rem] text-center mx-auto text-pink-800 backdrop-blur-[5px]'>CONNIE</motion.h1>
    </div>
  )
}