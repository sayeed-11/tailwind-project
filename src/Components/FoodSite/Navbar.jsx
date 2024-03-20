import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const navItems = ['home', 'menu', 'about', 'contact']

const Navbar = ({isDark, setDark}) => {
    const [isBar, setBar] = useState(false)
    const [name, setName] = useState('#home')
    return (
        <div className='w-full fixed top-0 left-0 flex bg-slate-100 justify-between px-5 md:px-10 items-center z-50 shadow-md dark:bg-neutral-900'>
            <div className='absolute w-[98%] h-0.5 md:h-0.5 bg-green-500 top-0 left-[1%] rounded-ee-md rounded-es-md'/>
            <div className='absolute w-[98%] h-0.5 md:h-0.5 bg-green-500 bottom-0 left-[1%] rounded-ss-md rounded-se-md'/>
            <div className="logo">
                <h1 className='text-2xl font-extrabold text-green-500 text-center py-2'>FOOD<span className='text-black dark:text-white'>HUB</span></h1>
            </div>
            <ul className='flex flex-col justify-start py-20 md:py-0 gap-y-5 text-3xl font-[700]  md:flex-row absolute md:static md:bg-transparent w-full md:w-auto right-0 top-12  h-screen md:h-auto bg-black md:gap-x-5 items-center uppercase md:text-sm md:font-bold transition-all' style={{right:isBar? '0%' : '-100%'}}>
                {
                    navItems.map((item, index) => {
                        return(<li className='md:active:text-green-500 active:text-black tracking-widest sm:text-black' style={{color : name === `#${item}` ? '#00D100' : 'rgb(100 116 139)'}} onClick={() => {setName(`#${item}`); setBar(!isBar)}}><a href={name}>{item}</a></li>)
                    })
                }
                <button className='absolute top-10 right-10 md:static text-black dark:text-white uppercase md:text-xs bg-green-500 w-10 h-10 text-xl md:w-6 md:h-6 rounded-full' onClick={() => {setDark(!isDark); setBar(!isBar)}}>{isDark ? <FontAwesomeIcon icon={faSun}/> : <FontAwesomeIcon icon={faMoon}/>}</button>
            </ul>
            <div className="bars md:hidden mt-1 " onClick={() => {setBar(!isBar)}}>
                {isBar ? <FontAwesomeIcon icon={faXmark} color='#FFF' className='text-2xl bg-green-500  w-10 py-1' /> : <FontAwesomeIcon icon={faBars} color='#FFF' className='text-2xl bg-green-500 px-0 py-1 w-10' />}
            </div>
        </div>
    )
}

export default Navbar