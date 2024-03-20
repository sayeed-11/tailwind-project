import React, { useEffect } from 'react'
import ice_img from '../../assets/iceCream/ice-cream-mix.png'
import ice_img2 from '../../assets/iceCream/main-img-2.png'

import service_img1 from '../../assets/iceCream/service-img-1.png'
import service_img2 from '../../assets/iceCream/service-img-2.png'
import service_img3 from '../../assets/iceCream/service-img-3.png'
import service_img4 from '../../assets/iceCream/service-img-4.avif'

import raspberry_img from '../../assets/iceCream/raspberry.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import play_store_img from '../../assets/iceCream/goole-play.png'
import app_store_img from '../../assets/iceCream/app-store.png'

import AOS from 'aos'
import 'aos/dist/aos.css'


const About = () => {
    useEffect(()=>{
        AOS.init({duration:1000});
    },[])
    return (
        <div id='about' className='bg-white flex flex-col'>
            <div className='bg-gradient-to-b from-pink-200 to-white pt-20'>
                <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1350px] mx-auto'>
                    <AboutLeftImage />
                    <AboutRightContent />
                </div>
            </div>
            <div className='bg-gradient-to-b from-white to-pink-200'>
                <div className=' max-w-[1350px] mx-auto'>
                    {
                        <OurService />
                    }
                </div>
            </div>
            <div className='bg-gradient-to-b from-pink-200 to-white'>
                <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1350px] mx-auto'>
                    <ConnieContent />
                    <ConnieImage />
                </div>
            </div>
            <div className='bg-gradient-to-b from-white to-pink-200 '>
                <div className='grid grid-cols-1 lg:grid-cols-2 max-w-[1350px] mx-auto'>
                    <OrderProcessLeft />
                    <OrderProcessRight />
                </div>
            </div>
        </div>
    )
}

export default About

const AboutLeftImage = () => {
    return (
        <div className=' flex justify-center items-center px-5 md:px-10 pt-0'>
            <div className='relative flex justify-center items-center bg-gradient-to-l from-pink-500 to-pink-900 rounded-3xl shadow-md' data-aos="fade-right">
                <img className='w-[80%] rounded ' src={ice_img} alt="" />
            </div>
        </div>
    )
}

const AboutRightContent = () => {
    return (
        <div className='py-10 px-5 md:px-20 flex flex-col gap-y-5 md:gap-y-10 items-start ' data-aos="fade-left">
            <span className='about-title text-xs font-bold uppercase tracking-[.3rem] text-pink-400'>about us</span>
            <h1 className='about-title-text text-3xl md:text-5xl text-pink-800 capitalize mt-[-1rem]'>the next generation of ice cream</h1>
            <p className='font-bold text-xs md:text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni porro hic distinctio et expedita beatae? Nesciunt molestias corporis voluptatibus soluta veniam commodi est, odit, deserunt sint exercitationem, nemo minima?</p>
            <button className='text-xs bg-gradient-to-r from-pink-500 to-pink-900 text-white px-16 py-3 rounded-md font-bold tracking-[.05rem] shadow-xl active:scale-[0.97]' >Learn More</button>
        </div>
    )
}

const ConnieImage = () => {
    return (
        <div className='flex justify-center items-center p-5 lg:p-10 '>
            <div className='relative flex justify-center items-center bg-gradient-to-r from-pink-300 to-pink-900 rounded-3xl p-5 shadow-md' data-aos="fade-left">
                <img className='w-[40%] rounded ' src={ice_img2} alt="" />
            </div>
        </div>
    )
}

const ConnieContent = () => {
    return (
        <div className='py-16 px-5  md:px-24 lg:px-10 flex flex-col gap-y-5 md:gap-y-10'>
            <span className='about-connie text-xs font-bold uppercase tracking-[.3rem] text-pink-400' data-aos='fade-right'>why connie</span>
            <h1 className='about-connie-text text-3xl md:text-5xl text-pink-800 capitalize mt-[-1rem]' data-aos='fade-right'>fresh and delicious every day</h1>
            <div className='flex flex-col gap-y-5' data-aos='fade-up'>
                <div className='flex items-center gap-x-5 md:gap-x-10 p-2'>
                    <i className="fa-regular fa-calendar-check text-white/[0.7] bg-gradient-to-t from-pink-300 to-pink-600 p-3 rounded-lg" />
                    <div>
                        <h1 className='connie-details-header text-pink-800 capitalize font-bold tracking-wider mb-1'>open everyday</h1>
                        <p className='text-sm font-bold text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, voluptatum?</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-5 md:gap-x-10 p-2'>
                    <i className="fa-regular fa-heart text-white/[0.7] bg-gradient-to-t from-pink-300 to-pink-600 p-3 rounded-lg" />
                    <div>
                        <h1 className='connie-details-header text-pink-800 capitalize font-bold tracking-wider mb-1'>made with love</h1>
                        <p className='text-sm font-bold text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, voluptatum?</p>
                    </div>
                </div>
                <div className='flex items-center gap-x-5 md:gap-x-10 p-2'>
                    <i className="fa-regular fa-thumbs-up text-white/[0.7] bg-gradient-to-t from-pink-300 to-pink-600 p-3 rounded-lg" />
                    <div>
                        <h1 className='connie-details-header text-pink-800 capitalize font-bold tracking-wider mb-1'>excellent review</h1>
                        <p className='text-sm font-bold text-slate-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, voluptatum?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


const OurService = () => {
    return (
        <div className=' flex flex-col items-center px-5 sm:px-24 md:px-32 gap-y-5 md:gap-y-10 py-16'>
            <span className='service-text text-xs font-bold uppercase tracking-[.3rem] text-pink-400' data-aos="fade-up">our services</span>
            <h1 className='service-text-title text-3xl md:text-6xl text-pink-800 capitalize text-center mt-[-1rem]' data-aos="fade-up">real ice cream for real people</h1>
            <div className='grid grid-flow-col-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 gap-x-3 px-12 lg:px-0 '>
                <div className="imgbox relative bg-gradient-to-b from-pink-500 to-pink-900 flex justify-center items-center rounded-2xl overflow-hidden" data-aos="zoom-in-up">
                    <img className='w-5/6 aspect-[1/1] object-cover' src={service_img1} alt="" />
                    <div className='absolute bottom-0 w-full bg-white/[0.2] backdrop-blur-[5px] px-3 py-2'>
                        <h1 className='service-type capitalize tracking-wider text-white'>custom flavour</h1>
                        <p className='text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia?</p>
                        <button className='text-xs font-bold text-white active:scale-[0.97]'>read more</button>
                    </div>
                    <i className="fa-solid fa-ice-cream absolute top-5 right-5 p-2 rounded-full backdrop-blur-[5px] bg-white/[0.2] text-white shadow-md" />
                </div>
                <div className="imgbox relative bg-gradient-to-b from-pink-400 to-pink-800 flex justify-center items-center rounded-2xl overflow-hidden" data-aos="zoom-in-up">
                    <img className='w-5/6 aspect-[1/1.5] object-cover' src={service_img2} alt="" />
                    <div className='absolute bottom-0 w-full bg-white/[0.2] backdrop-blur-[5px] px-3 py-2'>
                        <h1 className='service-type capitalize tracking-wider text-white'>takeaway</h1>
                        <p className='text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia?</p>
                        <button className='text-xs font-bold text-white active:scale-[0.97]'>read more</button>
                    </div>
                    <i className="fa-solid fa-truck absolute top-5 right-5 p-2 rounded-full backdrop-blur-[5px] bg-white/[0.2] text-white shadow-md" />
                </div>
                <div className="imgbox relative  bg-gradient-to-b from-pink-300 to-pink-700 flex justify-center items-center rounded-2xl overflow-hidden" data-aos="zoom-in-up">
                    <img className='w-5/6 aspect-[1/1.3] object-cover' src={service_img3} alt="" />
                    <div className='absolute bottom-0 w-full bg-white/[0.2] backdrop-blur-[5px] px-3 py-2'>
                        <h1 className='service-type capitalize tracking-wider text-white'>free simple</h1>
                        <p className='text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia?</p>
                        <button className='text-xs font-bold text-white active:scale-[0.97]'>read more</button>
                    </div>
                    <i className="fa-solid fa-vials absolute top-5 right-5 p-2 rounded-full backdrop-blur-[5px] bg-white/[0.2] text-white shadow-md" />
                </div>

                <div className="imgbox relative flex justify-center items-center rounded-2xl overflow-hidden" data-aos="zoom-in-up">
                    <img className='w-full aspect-[1/1.3] object-cover' src={service_img4} alt="" />
                    <div className='absolute bottom-0 w-full bg-white/[0.2] backdrop-blur-[5px] px-3 py-2'>
                        <h1 className='service-type capitalize tracking-wider text-white'>delivary</h1>
                        <p className='text-xs text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quia?</p>
                        <button className='text-xs font-bold text-white active:scale-[0.97]'>read more</button>
                    </div>
                    <i className="fa-solid fa-hand-holding-heart absolute top-5 right-5 p-2 rounded-full backdrop-blur-[5px] bg-white/[0.2] text-white shadow-md" />
                </div>
            </div>
        </div>
    )
}


const OrderProcessLeft = () => {
    return (
        <div className='flex justify-center items-center py-10 lg:py-20 order-last lg:order-first'>
            <div className="mobile-frame w-3/5 sm:w-2/5 h-auto bg-white rounded-2xl overflow-hidden shadow-lg" data-aos="fade-right">
                <div className='h-[10%] px-5 py-3 flex justify-between'>
                    <FontAwesomeIcon icon={faBars} className='text-pink-800' />
                    <i className="fa-solid fa-cart-shopping text-md text-pink-800" />
                </div>
                <div className="img w-full aspect-[1/1]">
                    <img className='raspberry-img w-full scale-[1.1]' src={raspberry_img} alt="" />
                </div>
                <div className="img-details h-[40%] bg-pink-300 rounded-2xl px-5 py-3 flex flex-col gap-y-3 sm:gap-y-5">
                    <div className="starts">
                        {
                            new Array(5).fill(0).map((item) => {
                                return (
                                    <FontAwesomeIcon icon={faStar} className='text-pink-100 text-[.5rem]' />
                                )
                            })
                        }
                    </div>
                    <div>
                        <h1 className='text-md font-bold text-pink-600'>Rasberry Ice-cream</h1>
                        <p className='text-xs'>With Mishberry Cream</p>
                    </div>
                    <div className=' flex justify-between flex-wrap gap-y-3'>
                        <span className='text-xs font-bold text-white'> some details about ice-cream</span>
                        <p className='text-xs font-bold text-pink-600'>156 $</p>
                    </div>
                    <button className='text-xs bg-pink-500 w-full py-1.5 rounded-lg text-white font-bold'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
const OrderProcessRight = () => {
    return (
        <div className='flex flex-col justify-center items-start py-10 lg:py-20 px-5 md:px-24 gap-y-5'>
            <span className='order-title uppercase  text-pink-400 text-xs tracking-[.3rem]' data-aos="fade-left">order process</span>
            <h1 className='order-title-main text-4xl text-pink-800' data-aos="fade-left">Simple way to order your food</h1>
            <p className='text-sm' data-aos="fade-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod mollitia reprehenderit error aut dolore nostrum numquam! Ex quos iusto eaque veritatis minima quia itaque, mollitia voluptate nesciunt repudiandae asperiores. Accusamus?</p>
            <div className='flex flex-col gap-y-5 py-5' data-aos="flip-left">
                <div className='flex items-center gap-x-5'>
                    <i className="fa-solid fa-square-check bg-gradient-to-b from-pink-600 to-pink-400 p-2 text-white rounded-md" />
                    <p className='text-sm font-bold'>select your food</p>
                </div>
                <div className='flex items-center gap-x-5'>
                    <i className="fa-solid fa-cart-shopping bg-gradient-to-b from-pink-600 to-pink-400 p-2 text-white rounded-md" />
                    <p className='text-sm font-bold'>add to cart</p>
                </div>
                <div className='flex items-center gap-x-5'>
                    <i className="fa-solid fa-truck bg-gradient-to-b from-pink-600 to-pink-400 p-2 text-white rounded-md" />
                    <p className='text-sm font-bold'>order your food</p>
                </div>
            </div>
            <div className="app-download-link flex flex-col gap-y-3" data-aos="flip-up">
                <h1 className='text-xs font-bold capitalize text-pink-700'>access our applications</h1>
                <div className='flex flex-wrap gap-x-2'>
                    <img className='w-36 h-[3.2rem] active:scale-[0.97]' src={play_store_img} alt="" />
                    <img className='w-36 h-[3.2rem] active:scale-[0.97]' src={app_store_img} alt="" />
                </div>
            </div>
        </div>
    )
}

