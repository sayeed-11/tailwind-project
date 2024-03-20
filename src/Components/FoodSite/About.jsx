import React from 'react'
import appImg from '../../assets/FoodWeb/webApp.png'
import appStore from '../../assets/FoodWeb/app-store.png'
import playStore from '../../assets/FoodWeb/play-store.png'
import { teamMembers } from './TeamMembers'

const About = () => {
  return (
    <div id='about' className='h-auto pb-12 w-full bg-slat-500 pt-16 border-t-2 border-white md:px-10 px-0 dark:bg-neutral-950'>
      {<SlideHeader />}
      <div className='flex flex-col gap-y-16'>
        <div className='mt-8 grid lg:grid-cols-2 md:px-10 p-5 gap-x-20 grid-cols-1 '>
          <AboutLorem />
          <AboutData />
        </div>
        {<OursTeam />}
        {<OurApp />}
      </div>
    </div>
  )
}

export default About

const SlideHeader = () => {
  return (
    <div className="heading relative flex justify-center h-12 items-center">
      <div className='absolute w-[130px] bg-green-500 h-[110%] rounded-md' />
      <h1 className='text-green-500 absolute h-full text-center text-2xl uppercase font-extrabold tracking-wide inline-block bg-white w-48 shadow-lg pt-2'>About us</h1>
    </div>
  )
}

const AboutData = () => {
  return (
    <div className='flex flex-col gap-y-5 mt-10 lg:mt-0'>
      <h1 className='text-xl font-semibold text-green-500'>Ours Specialities</h1>
      <div className='flex items-center gap-x-5 bg-white px-5 py-3 shadow-md dark:bg-neutral-800'>
        <i className="fa-solid fa-bowl-food text-3xl text-green-500 border-r-2 px-3 border-green-500" />
        <div className='flex flex-col gap-y-1'>
          <h1 className='text-slate-700 font-bold dark:text-white'>Healthy Food</h1>
          <p className='text-xs text-gray-500 line-clamp-2 dark:text-white/75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugit nesciunt consequatur voluptate laudantium excepturi</p>
        </div>
      </div>
      <div className='flex items-center gap-x-5 bg-white px-5 py-3 shadow-md dark:bg-neutral-800'>
        <i className="fa-solid fa-truck-fast text-3xl text-green-500 border-r-2 px-3 border-green-500" />
        <div className='flex flex-col gap-y-1'>
          <h1 className='text-slate-700 font-bold dark:text-white'>Fast Service</h1>
          <p className='text-xs text-gray-500 line-clamp-2 dark:text-white/75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugit nesciunt consequatur voluptate laudantium excepturi</p>
        </div>
      </div>
      <div className='flex items-center gap-x-5 bg-white px-5 py-3 shadow-md dark:bg-neutral-800'>
        <i className="fa-solid fa-fire text-3xl text-green-500 border-r-2 px-3 border-green-500" />
        <div className='flex flex-col gap-y-1'>
          <h1 className='text-slate-700 font-bold dark:text-white'>Popular dish</h1>
          <p className='text-xs text-gray-500 line-clamp-2 dark:text-white/75'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio fugit nesciunt consequatur voluptate laudantium excepturi.</p>
        </div>
      </div>
    </div>
  )
}

const AboutLorem = () => {
  return (
    <div className='flex flex-col gap-y-5'>
      <h1 className='text-green-500 text-xl font-semibold'>We Provide best Products</h1>
      <div className='flex flex-col gap-y-1'>
        <p className='text-sm dark:text-white'>Welcome to <span className='text-green-500 font-bold'> FOODHUB</span></p>
        <p className='text-sm dark:text-white'>We pride ourselves on delivering not only delicious meals but also fast service without compromising on quality. Our team is dedicated to ensuring that you receive your order promptly, allowing you to enjoy a satisfying meal without the wait.</p>
        <p className='text-sm dark:text-white'>At <span className='text-green-500 font-bold'>FOODHUB</span>, we understand the importance of offering healthy options that nourish both the body and the soul. That's why our menu features a variety of nutritious dishes crafted with fresh, locally sourced ingredients. From vibrant salads to hearty grain bowls, we have something to suit every taste and dietary preference.</p>
        <p className='text-sm dark:text-white'>One dish that has quickly become a favorite among our patrons is our <span className='font-bold text-green-600 text-[1.2rem]'>Grilled Tandoori Chicken</span> . Bursting with flavor and made with the finest ingredients, it's a true crowd-pleaser that keeps diners coming back for more.</p>
        <p className='text-sm dark:text-white'>Thank you for choosing <span className='text-green-500 font-bold'>FOODHUB</span>. We look forward to serving you a fast, healthy, and delicious meal soon!</p>
        <p className='text-sm dark:text-white'>Warm regards,<br />
          <span className='text-[1.2rem] text-green-500 font-bold'>SAYEED ANWAR</span></p>
      </div>
    </div>
  )
}


const OursTeam = () => {
  return (
    <div className='md:px-10 px-5'>
      <h1 className='text-xl text-green-500 font-semibold'>Ours Team</h1>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-x-5 py-5 gap-y-5'>
        {
          teamMembers.map((item) => {
            return (
              <div className='w-full aspect-square bg-white p-3 shadow-md dark:bg-neutral-800'>
                <img className='w-full aspect-square object-cover rounded' src={item.img} alt="" />
                <div className='flex md:flex-row flex-col justify-between md:items-end py-2 gap-y-3' >
                  <div>
                    <p className='text-sm text-green-500 font-bold text-ellipsis text-nowrap overflow-hidden'>{item.name}</p>
                    <p className='text-xs text-slate-400 text-ellipsis text-nowrap overflow-hidden dark:text-white/50'>Experience : {item.experience}</p>
                  </div>
                  <button className='text-sm capitalize bg-green-500 px-2 py-1 text-white active:bg-slate-500 text-ellipsis text-nowrap overflow-hidden'>know more</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

const OurApp = () => {
  return (
    <div className='w-full lg:px-10 px-5 grid grid-cols-1  sm:grid-cols-2  gap-x-10 gap-y-10'>

      <div className="app-image flex justify-center items-center">
        <img className='frame lg:w-1/3 w-2/3' src={appImg} alt="" />
      </div>

      <div className="download-links flex flex-col gap-y-5 ">
        <h1 className='lg:text-4xl text-2xl font-bold text-green-500 capitalize border-l-8 border-green-500 pl-5'>Download our app for exciting deals</h1>
        <p className='text-sm text-slate-600 pl-5 dark:text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab perspiciatis doloribus animi illum sequi fugiat quos dolorem, asperiores nobis dolorum eaque nisi modi officia alias consectetur. Aut dolorum aliquid assumenda.</p>
        <div className="app-links flex lg:flex-row flex-col gap-y-5 gap-x-5 mt-12 pl-5 items-center sm:items-start lg:items-center">
          <button className="android-link justify-center bg-black dark:bg-neutral-800 flex pl-3 pr-10 gap-x-3  items-center w-[250px] lg:w-auto shadow-md active:opacity-[0.7] active:scale-[0.98]">
            <div className="playstore">
              <img className='w-12 rounded-full' src={playStore} alt="" />
            </div>
            <div className='text-white'>
              <p className='text-xs font-bold'>GET IT ON</p>
              <p className='text-xs'>Google Play</p>
            </div>
          </button>
          <button className="ios-link flex justify-center bg-white pl-3 gap-x-3 pr-10 items-center w-[250px] lg:w-auto shadow-md active:opacity-[0.7] active:scale-[0.98]">
            <div className="appstore">
              <img className='w-12 rounded-full' src={appStore} alt="" />
            </div>
            <div className='text-slate-700'>
              <p className='text-xs font-bold'>Available on</p>
              <p className='text-xs'>App Store</p>
            </div>
          </button>
        </div>
      </div>

    </div>
  )
}