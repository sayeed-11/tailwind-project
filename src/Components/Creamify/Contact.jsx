import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
},[])
  return (
    <div id='contact' className='w-full flex flex-col'>
      <div className='bg-gradient-to-b from-pink-200 to-white pt-20 pb-10'>
        <div className='flex flex-col md:flex-row justify-center max-w-[1350px] mx-auto gap-y-5 md:gap-x-10 lg:gap-x-20 px-5 md:px-5 lg:px-20'>
          <ContactHeader />
          <ContactMessage />
        </div>
      </div>
    </div>
  )
}

export default Contact

const ContactHeader = () => {
  return (
    <div className='flex flex-justify flex-col gap-y-5 mb-[3rem] sm:mb-0 w-full md:w-[50%]'>
      <span className='contact-title text-pink-400 text-sm tracking-[0.3rem]' data-aos="zoom-out" aos-duration="1000" aos-once="false">Contact us</span>
      <h1 className='contact-text-main text-3xl font-bold tracking-widest text-pink-800' data-aos="fade-right">Get in Touch</h1>
      <p data-aos="fade-right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum ipsa molestiae, totam alias sint ea iusto enim vitae a reiciendis, quaerat ab quod at consectetur voluptates eveniet optio recusandae quia.</p>

      <div className="message space-y-3" data-aos="fade-right">
        <h1 className='message-title tracking-wider text-pink-400'>send message</h1>
        <div className="name flex flex-col sm:flex-row md:flex-col gap-y-3 lg:flex-row gap-x-3">
          <input className='border-2 w-full border-pink-400 rounded-md px-2 py-2 bg-transparent outline-none' type="text" placeholder='First Name' />
          <input className='border-2 w-full border-pink-400 rounded-md px-2 py-2 bg-transparent outline-none' type="text" placeholder='Last Name' />
        </div>
        <input className='border-2 w-full border-pink-400 rounded-md px-2 py-2 bg-transparent outline-none' type="text" placeholder='Subject' />
        <textarea className='border-2 w-full border-pink-400 rounded-md px-2 py-2 bg-transparent outline-none' type="text" placeholder='Message' />
        <button className='border-2 w-full border-pink-400 bg-pink-400 rounded-md px-2 py-2 text-white outline-none shadow-md active:shadow-none active:scale-[0.99]' type="submit">SEND</button>
      </div>
    </div>

  )
}


const ContactMessage = () => {
  return (
    <div className='w-full md:w-[50%] pt-5 md:pt-10 space-y-3 md:space-y-12 lg:space-y-5' data-aos="fade-left">
      <h1 className='contactMessage-title tracking-wider text-pink-400'>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <div className="newsletter-email w-[100%] md:w-[90%] relative flex items-center  border-2 border-pink-400 rounded-full px-5">
        <input type="text" placeholder='Email id' className='w-full bg-transparent border-none outline-none pr-32 py-3' />
        <button className='absolute right-1 bg-pink-400 px-8 py-2 rounded-full text-white shadow-md active:shadow-none active:scale-[0.99]'>subscribe</button>
      </div>
      <div className="contact-details grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-y-2 md:gap-y-10 py-10">
        <div className='flex items-center gap-x-3'>
          <i className="fa-solid fa-phone text-pink-400 text-2xl" />
          <div>
            <h1 className='font-bold'>Phone Number</h1>
            <p className='text-xs'>9749319812</p>
          </div>
        </div>

        <div className='flex items-center gap-x-3'>
          <i className="fa-solid fa-envelope text-pink-400 text-2xl" />
          <div>
            <h1 className='font-bold'>Email id</h1>
            <p className='text-xs'>connie@gmail.com</p>
          </div>
        </div>

        <div className='flex items-center gap-x-3'>
          <i className="fa-brands fa-internet-explorer text-pink-400 text-2xl" />
          <div>
            <h1 className='font-bold'>Our Another Site</h1>
            <p className='text-xs'>www.foodhub.com</p>
          </div>
        </div>

        <div className='flex items-center gap-x-3'>
          <i className="fa-solid fa-address-book text-pink-400 text-2xl" />
          <div>
            <h1 className='font-bold'>Address</h1>
            <p className='text-xs'>English Bazar, Malda, 732141</p>
          </div>
        </div>
      </div>

      <div className="social-links space-y-3">
        <h1 className='social-links-title text-bold text-pink-400 tracking-wider'>Follow us</h1>
        <div className='space-x-3'>
          <motion.i whileHover={{backgroundColor:'white', color:'pink'}} transition={{duration:0.1}} whileTap={{scale:0.80}} className="fa-brands fa-facebook-f bg-pink-400 p-4 text-white rounded-sm shadow-xl" />
          <motion.i whileHover={{backgroundColor:'white', color:'pink'}} transition={{duration:0.1}} whileTap={{scale:0.80}} className="fa-brands fa-youtube bg-pink-400 p-4 text-white rounded-sm shadow-xl" />
          <motion.i whileHover={{backgroundColor:'white', color:'pink'}} transition={{duration:0.1}} whileTap={{scale:0.80}} className="fa-brands fa-twitter bg-pink-400 p-4 text-white rounded-sm shadow-xl" />
          <motion.i whileHover={{backgroundColor:'white', color:'pink'}} transition={{duration:0.1}} whileTap={{scale:0.80}} className="fa-brands fa-instagram bg-pink-400 p-4 text-white rounded-sm shadow-xl" />
        </div>
      </div>
    </div>
  )
}