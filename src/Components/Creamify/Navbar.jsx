import React, { useState } from 'react'
import logo from '../../assets/iceCream/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion'

const navLinks = ['home', 'about', 'menu', 'products', 'contact']


const Navbar = () => {
    const [navSlide, setNavSlide] = useState(false)
    const [active, setActive] = useState(0);
    return (
        <motion.div
            initial={{ y: -200 }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                y: { duration: 1 }
            }}
            className='fixed top-0 left-0 w-full bg-[#ed4d9a] backdrop-blur-3xl z-50'>
            <div className='max-w-[1350px] h-12 flex justify-between gap-x-5 items-center px-5 md:px-10 py-1.5 mx-auto z-50'>
                <Logo />
                <NavItems navSlide={navSlide} setNavSlide={setNavSlide} active={active} setActive={setActive} />
                <div className='grid grid-cols-2 md:grid-cols-1 pr-0 md:pr-5 items-center gap-x-7  w-20  md:w-auto  md:gap-x-10 '>
                    <ShopLink />
                    <Bars navSlide={navSlide} setNavSlide={setNavSlide} />
                </div>
            </div>
        </motion.div>
    )
}

export default Navbar


const Logo = () => {
    return (
        <motion.div
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                x: { duration: 1, delay: 1 }
            }}
            className="logo h-8 relative z-50">
            <img className='logo-pic z-50 h-full' src={logo} alt="" />
        </motion.div>
    )
}

const NavItems = ({ navSlide, setNavSlide, active, setActive }) => {
    return (
        <div
         className={`nav-items ${navSlide ? 'active-nav' : ''} absolute w-full overflow-hidden md:bg-transparent  md:h-auto right-0 md:static flex items-center justify-center transition-all top-12 h-0`}>
            <ul className='flex flex-row gap-x-7 justify-center items-cemter md:h-auto bg-gradient-to-b from-pink-900 to-pink-500 w-full md:bg-none py-10 gap-y-10'>
                {
                    navLinks.map((item, index) => {
                        return (
                            <li className={`text-center scale-${index === active ? '[1.5]' : '[1]'}`}><a href={`#${item}`} className={`${index === active ? 'active-link' : ''} font-[100] capitalize text-sm text-${index === active ? 'black' : 'white'} tracking-widest`} onClick={() => {
                                setNavSlide(!navSlide);
                                setActive(index)
                            }}>{item}</a></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


const ShopLink = () => {
    return (
        <motion.div
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                x: { duration: 1, delay: 1 }
            }}
            className="shop-link z-50">
            <button className='flex items-center outline outline-offset-2 outline-pink-100 w-8 h-8 md:w-36 md:px-6 md:py-1.5 gap-x-3 bg-gradient-to-r from-pink-600 to-pink-900 rounded-full shadow-md active:scale-[0.9]'>
                <h1 className='shop-link-text md:text-[.7rem] capitalize font-[700] tracking-widest text-white text-[0rem]'>Our Shop</h1>
                <i className="fa-solid fa-arrow-right text-white translate-x-[-4px]" />
            </button>
        </motion.div>
    )
}

const Bars = ({ navSlide, setNavSlide }) => {
    return (

        navSlide ? <FontAwesomeIcon icon={faXmark} color='#FFF' className='md:hidden z-50 text-2xl active:scale-[0.97]' onClick={() => {
            setNavSlide(!navSlide)
        }} /> : <FontAwesomeIcon icon={faBars} color='#FFF' className='md:hidden z-50 text-2xl active:scale-[0.97]' onClick={() => {
            setNavSlide(!navSlide)
        }} />
    )
}

