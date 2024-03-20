import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bg-green-500 px-0 sm:px-10 text-white pb-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-28'>
                {<FooterLeft/>}
                {<FooterRight />}
            </div>
            <div className='flex justify-center border-t-[1.5px] border-white py-3 px-2'>
                <h1 className='text-xs sm:text-sm text-center text-slate-200 '>Copyright 2024 • FoodHub • All Right Reserved</h1>
            </div>
        </div>
    )
}

export default Footer


const FooterRight = () => {
    return (
        <div className='grid grid-cols-2 px-5 py-5'>
            <div className="left-side">
                <h1 className='font-bold mb-3'>Support</h1>
                <p className='text-xs'>FAQ</p>
                <p className='text-xs'>Privacy Policy</p>
                <p className='text-xs'>Help</p>
                <p className='text-xs'>Contact</p>
            </div>
            <div className="right-side">
                <h1 className='text-bold mb-3'>Shop</h1>
                <p className='text-xs'>Veg Food</p>
                <p className='text-xs'>Non-veg Food</p>
                <p className='text-xs'>Spicy</p>
                <p className='text-xs'>Sweets</p>
            </div>
        </div>
    )
}

const FooterLeft = () => {
    return (
        <div className="more-about px-5 py-5 flex flex-col gap-y-3">
            <h1 className='font-bold'>More About us</h1>
            <p className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel explicabo non consequatur, exercitationem doloribus suscipit impedit inventore atque quo repellendus voluptatem, itaque quaerat aut possimus quidem eligendi, animi fugit ab.</p>
        </div>
    )
}