import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import menu_best_img1 from '../../assets/iceCream/products_1-1.png'
import menu_best_img2 from '../../assets/iceCream/products_2-1.png'
import menu_best_img3 from '../../assets/iceCream/products_3-1.png'

import Slider from 'react-slick'
import { settings } from './Settings'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import special_ice_cream_img_1 from '../../assets/iceCream/icecream5.png'
import special_ice_cream_img_2 from '../../assets/iceCream/icecream6.png'
import special_ice_cream_img_3 from '../../assets/iceCream/icecream8.png'
import special_ice_cream_img_4 from '../../assets/iceCream/icecream9.png'

import AOS from 'aos'
import 'aos/dist/aos.css'

const Menu = () => {
    useEffect(() => {
        AOS.init({duration:1000});
    },[])
    return (
        <div id='menu' className='w-full flex flex-col'>
            <div className='bg-gradient-to-b from-pink-200 to-white pt-20'>
                <div className='flex flex-col items-center justify-center max-w-[1350px] mx-auto'>
                    <MenuHeader />
                    <OurBestProducts />
                </div>
            </div>
            <div className='bg-gradient-to-b from-white to-pink-200'>
                <div className='max-w-[1350px] mx-auto'>
                    <MenuList />
                </div>
            </div>
            <div className='bg-gradient-to-b to-white from-pink-200'>
                <div className='max-w-[1350px] mx-auto'>
                    <TodaysSpecial />
                    {/* <TODAYS_SPECIAL/> */}
                    <Discount />
                </div>
            </div>
        </div>
    )
}

export default Menu

const MenuHeader = () => {
    return (
        <div className='flex flex-justify flex-col items-center gap-y-5 mb-[3rem] sm:mb-0 px-5'>
            <span className='menu-title text-center text-pink-400 text-sm tracking-[0.3rem]' data-aos="fade-down">our menu</span>
            <h1 className='menu-title-main  text-4xl md:text-5xl text-pink-800 text-center' data-aos="fade-down">let's make your life creamy</h1>
            <p></p>
        </div>
    )
}

const OurBestProducts = () => {
    return (
        <div className='flex flex-col md:flex-wrap gap-y-[10rem] md:gap-y-[10rem] items-center  md:flex-row justify-center gap-x-5 px-5 sm:px-20 md:px-20 py-[10rem] md:py-[12rem]'>
            <div className='max-w-[280px] md:max-w-3/5 lg:w-4/5 bg-gradient-to-t from-pink-800 to-pink-300 flex flex-col gap-y-7 items-center rounded-2xl px-5 sm:px-10 shadow-lg pb-5' data-aos="zoom-in">
                <div className="img relative w-full aspect-[1/0.2] flex justify-center">
                    <img className='absolute w-2/3 rounded-bl-full rounded-br-full top-[-300%]' src={menu_best_img1} alt="" />
                </div>
                <h1 className='best-item-title font-bold text-white tracking-[.2rem]'>ICE CREAMS</h1>
                <div>
                    {
                        new Array(5).fill(0).map((item) => {
                            return (<FontAwesomeIcon icon={faStar} className='text-xs text-pink-200' />)
                        })
                    }
                </div>
                <p className='text-xs sm:text-sm font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur obcaecati amet laboriosam? Enim voluptatem quis et, temporibus provident doloremque voluptatibus, distinctio a nemo similique cumque? Quo illo repellendus alias?</p>
                <button className='flex gap-x-5 items center px-10 bg-white py-3 text-pink-800 rounded-full text-xs active:scale-[0.97]'>
                    <p>Order Now</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>


            <div className='max-w-[280px] md:max-w-3/5 lg:w-4/5  bg-gradient-to-t from-green-800 to-green-300 flex flex-col items-center gap-y-7 rounded-2xl px-5 sm:px-10 shadow-lg pb-5' data-aos="zoom-in">
                <div className="img relative w-full aspect-[1/0.2]  flex justify-center">
                    <img className='absolute w-2/3 rounded-bl-full rounded-br-full top-[-300%]' src={menu_best_img3} alt="" />
                </div>
                <h1 className='best-item-title font-bold text-white tracking-[.2rem]'>YOGURTS</h1>
                <div>
                    {
                        new Array(5).fill(0).map((item) => {
                            return (<FontAwesomeIcon icon={faStar} className='text-xs text-green-200' />)
                        })
                    }
                </div>
                <p className='text-xs sm:text-sm font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur obcaecati amet laboriosam? Enim voluptatem quis et, temporibus provident doloremque voluptatibus, distinctio a nemo similique cumque? Quo illo repellendus alias?</p>
                <button className='flex gap-x-5 items center px-10 bg-white py-3 text-pink-800 rounded-full text-xs active:scale-[0.97]'>
                    <p>Order Now</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>

            <div className=' max-w-[280px] md:max-w-3/5 lg:w-4/5  bg-gradient-to-t from-[#664300] to-[#a87b05] flex flex-col gap-y-7 items-center rounded-2xl px-5 sm:px-10 shadow-lg pb-5' data-aos="zoom-in">
                <div className="img relative w-full aspect-[1/0.2] flex justify-center">
                    <img className='absolute w-2/3 rounded-bl-full rounded-br-full top-[-300%]' src={menu_best_img2} alt="" />
                </div>
                <h1 className='best-item-title font-bold text-white tracking-[.2rem]'>MILKSHAKES</h1>
                <div>
                    {
                        new Array(5).fill(0).map((item) => {
                            return (<FontAwesomeIcon icon={faStar} className='text-xs text-pink-200' />)
                        })
                    }
                </div>
                <p className='text-xs sm:text-sm font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium pariatur obcaecati amet laboriosam? Enim voluptatem quis et, temporibus provident doloremque voluptatibus, distinctio a nemo similique cumque? Quo illo repellendus alias?</p>
                <button className='flex gap-x-5 items center px-10 bg-white py-3 text-pink-800 rounded-full text-xs active:scale-[0.97]'>
                    <p>Order Now</p>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    )
}

const MenuList = () => {
    return (
        <div className='px-5 md:px-15 lg:px-20 grid grid-cols-1 md:grid-cols-2 mt-[-7rem] gap-x-20 mb-20'>
            <div data-aos="fade-right">
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3' >
                    <div className=''>
                        <h1 className='menu-list-title text-pink-800'>EARTH FRUITY</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$9</span>
                </div>
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3' >
                    <div className=''>
                        <h1 className='menu-list-title text-pink-800'>MIXED FRUIT</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$11</span>
                </div>
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3' >
                    <div className=''>
                        <h1 className='menu-list-title text-pink-800'>LAVA GINGER</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$12</span>
                </div>
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3' >
                    <div className=''>
                        <h1 className='menu-list-title text-pink-800'>RED VOLCANO</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$8</span>
                </div>
            </div>



            <div data-aos="fade-left">
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3'>
                    <div>
                        <h1 className='menu-list-title text-pink-800'>SALTY BREEZE</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$12</span>
                </div>
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3'>
                    <div>
                        <h1 className='menu-list-title text-pink-800'>LATE PUMPKIN</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$14</span>
                </div>
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3'>
                    <div>
                        <h1 className='menu-list-title text-pink-800'>BLACK REAPER</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$21</span>
                </div>
                <div className='flex gap-x-10 justify-between items-end mb-5 border-b-[1px] border-black py-3'>
                    <div>
                        <h1 className='menu-list-title text-pink-800'>SLIGHT SALTY</h1>
                        <p className='text-sm text-slate-700'>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
                    </div>
                    <span className='menu-price text-2xl text-pink-700'>$15</span>
                </div>
            </div>

        </div>
    )
}

const TodaysSpecial = () => {
    return (
        <div className='py-5 flex justify-center flex-col items-center '>
            <h1 className='slider-main-title text-center font-bold text-3xl text-pink-800' data-aos = "zoom-out">Today's Special !</h1>
            <div className='w-full px-10 md:px-20'  data-aos="zoom-in">
                <Slider {...settings} className='w-full'>
                    <div className='py-16 px-5 md:px-10 md:py-24'>
                        <div className="img">
                            <img className='w-full' src={special_ice_cream_img_3} alt="" />
                        </div>
                        <div className='flex flex-col items-center py-5 gap-y-3'>
                            <h1 className='font-bold text-2xl slider-title text-pink-800 tracking-wide'>BLUEBERRY</h1>
                            <p className='text-center text-sm font-bold text-slate-700'>Nulla sed tortor sit amet mauris aliquet imper.</p>
                            <span className='font-bold slider-price text-2xl text-pink-500'>$1.20</span>
                        </div>
                    </div>

                    <div className='py-16 px-5 md:px-10 md:py-24'>
                        <div className="img">
                            <img className='' src={special_ice_cream_img_2} alt="" />
                        </div>
                        <div className='flex flex-col items-center py-5 gap-y-3'>
                            <h1 className='font-bold text-2xl slider-title text-pink-800 tracking-wide'>MANGOS</h1>
                            <p className='text-center text-sm font-bold text-slate-700'>Nulla sed tortor sit amet mauris aliquet imper.</p>
                            <span className='font-bold slider-price text-2xl text-pink-500'>$1.40</span>
                        </div>
                    </div>

                    <div className='py-16 px-5 md:px-10 md:py-24'>
                        <div className="img">
                            <img className='' src={special_ice_cream_img_4} alt="" />
                        </div>
                        <div className='flex flex-col items-center py-5 gap-y-3'>
                            <h1 className='font-bold text-2xl slider-title text-pink-800 tracking-wide'>CAPPUCINO</h1>
                            <p className='text-center text-sm font-bold text-slate-700'>Nulla sed tortor sit amet mauris aliquet imper.</p>
                            <span className='font-bold slider-price text-2xl text-pink-500'>$1.35</span>
                        </div>
                    </div>

                    <div className='py-16 px-5 md:px-10 md:py-24'>
                        <div className="img">
                            <img className='' src={special_ice_cream_img_1} alt="" />
                        </div>
                        <div className='flex flex-col items-center py-5 gap-y-3'>
                            <h1 className='font-bold text-2xl slider-title text-pink-800 tracking-wide'>PISTACHIO</h1>
                            <p className='text-center text-sm font-bold text-slate-700'>Nulla sed tortor sit amet mauris aliquet imper.</p>
                            <span className='font-bold slider-price text-2xl text-pink-500'>$1.10</span>
                        </div>
                    </div>

                </Slider>
            </div>
        </div>
    )
}


const Discount = () => {
    return (
        <div className='flex flex-col justify-center items-center pb-10 gap-y-5 px-5' data-aos="fade-down">
            <span className='discount-title text-sm font-bold tracking-[0.3rem] uppercase text-pink-400' data-aos="fade-down">special discount</span>
            <h1 className='discount-title-main text-5xl capitalize text-pink-800 text-center' data-aos="fade-down">get special eid discount !</h1>
            <div className='flex gap-x-10 flex-wrap justify-center items-center gap-y-5'>
                <button className='bg-pink-800 text-xs font-bol px-10 py-3 text-white flex gap-x-5 items-center rounded-full active:scale-[0.97]'>
                    <span>our product</span>
                    <i className="fa-solid fa-arrow-right" />
                </button>
                <button className='bg-white border-2 border-pink-800 text-xs font-bol px-10 py-3 text-pink-800 flex gap-x-5 items-center rounded-full active:scale-[0.97]'>
                    <span>contact us</span>
                    <i className="fa-solid fa-phone" />
                </button>
            </div>
        </div>
    )
    
}



