import React from 'react'
import { } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div id='contact' className='h-auto pb-12 w-full bg-slat-500 pt-16 md:px-10 px-0 dark:bg-neutral-950'>
      <div className="heading relative flex justify-center h-12 items-center">
        <div className='absolute w-[130px] bg-green-500 h-[110%] rounded-md' />
        <h1 className='text-green-500 absolute h-full text-center text-2xl uppercase font-extrabold tracking-wide inline-block bg-white w-56 shadow-lg pt-2'>Contact us</h1>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 mt-16 py-10 gap-x-10'>
        <div className="contact-details px-5 md:px-10 flex flex-col gap-y-3">
          <h1 className='text-4xl font-extrabold dark:text-white'>Get in <span className='text-green-500'>Touch</span></h1>
          <p className='text-sm text-slate-500 dark:text-white/75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt, illo eos eveniet aspernatur sequi neque, accusantium explicabo obcaecati cupiditate recusandae molestias. Corrupti unde quia laudantium, amet impedit sequi eum ea.</p>
          {<ContactDetails/>}
        </div>
        {<MessageComponent />}
      </div>
    </div>
  )
}

export default Contact


const MessageComponent = () => {
  return (
    <div className="message flex flex-col gap-y-3 px-5 md:px-10 lg:px-20 mt-10 lg:mt-0">
      <h1 className='font-bold text-green-500 text-xl'>Send Message</h1>
      <div className='input-box flex flex-col gap-y-5'>
        <div className="name flex flex-col md:flex-row lg:flex-col xl:flex-row gap-x-2 gap-y-3">
          <input className='flex-1 rounded-md text-sm outline-none border-green-500 border-2 px-2 py-2 bg-white dark:bg-white/10 dark:text-white ' type="text" placeholder='First name' />
          <input className='flex-1 rounded-md text-sm outline-none border-green-500 border-2 px-2 py-2 bg-white dark:bg-white/10 dark:text-white ' type="text" placeholder='Last name' />
        </div>
        <input className='bg-white rounded-md text-sm outline-none border-green-500 border-2 px-2 py-2 dark:bg-white/10 dark:text-white ' type="text" placeholder='Subject' />
        <textarea className='bg-white rounded-md text-sm outline-none border-green-500 border-2 px-2 py-1 dark:bg-white/10 dark:text-white ' name="" id="" cols="30" rows="4" placeholder='message' />
        <button className='bg-green-500 py-2 text-md capitalize text-white rounded active:bg-white active:text-green-500 outline-2 outline-white outline'>send</button>
      </div>
    </div>
  )
}

const ContactDetails = () => {
  return (
    <div className='contat-icons grid grid-cols-1 sm:grid-cols-2 mt-10 gap-x-10 gap-y-10'>
      <div className="phone-number flex items-center gap-x-5">
        <i className="fa-sharp fa-solid fa-phone text-3xl text-green-500" />
        <div>
          <h1 className='font-bold dark:text-white/75'>Phone Number</h1>
          <p className='text-xs dark:text-white/75'>9834162830</p>
        </div>
      </div>
      <div className="email-address flex items-center gap-x-5">
        <i className="fa-solid fa-envelope text-3xl text-green-500" />
        <div>
          <h1 className='font-bold dark:text-white/75'>Enail Address</h1>
          <p className='text-xs text-ellipsis text-nowrap overflow-hidden dark:text-white/75'>foodhub@gmail.com</p>
        </div>
      </div>
      <div className="website flex items-center gap-x-5">
        <i className="fa-solid fa-globe text-3xl text-green-500" />
        <div>
          <h1 className='font-bold dark:text-white/75'>Our Another site</h1>
          <p className='text-xs dark:text-white/75'>www.snackshub.com</p>
        </div>
      </div>
      <div className="address flex items-center gap-x-5">
        <i className="fa-solid fa-address-book text-3xl text-green-500" />
        <div>
          <h1 className='font-bold dark:text-white/75'>Address</h1>
          <p className='text-xs dark:text-white/75'>West Bengal,Malda Town,732141</p>
        </div>
      </div>
    </div>
  )
}