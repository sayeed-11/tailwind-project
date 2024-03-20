import React, { useEffect, useState } from 'react'

import { Bars } from './products/Bars'
import { Platters } from './products/Platters'
import { Balls } from './products/Balls'
import { CandyCane } from './products/CandyCane'
import { Cones } from './products/Cones'

import AOS from 'aos'
import { motion } from 'framer-motion'

const categories = ["Bars", "Balls", "Platters", "Candy Cane", "Cones"]
const products = [Bars, Balls, Platters, CandyCane, Cones]

const Products = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <div id='products' className='w-full flex flex-col'>
            <div className='bg-gradient-to-b to-pink-200 from-white pt-20'>
                <div className='flex flex-col items-center justify-center max-w-[1350px] mx-auto gap-y-5'>
                    <ProductHeader />
                    <ProductContent />
                </div>
            </div>
        </div>
    )
}

export default Products


const ProductHeader = () => {
    return (
        <div className='flex flex-justify flex-col items-center gap-y-5 mb-[3rem] sm:mb-0 px-5'>
            <span className='product-title text-center text-pink-400 text-sm tracking-[0.3rem]' data-aos="zoom-out">our products</span>
            <h1 className='product-title-main  text-4xl md:text-5xl text-pink-800 text-center' data-aos="zoom-in">Choose your taste</h1>
        </div>
    )
}

const ProductContent = () => {
    const [isActive, setActive] = useState("Bars")
    const [selecterProducts, setProducts] = useState(products[0])
    return (
        <div className='space-y-20 md:py-10'>
            <div className="categories flex gap-x-4 sm:gap-x-10 md:gap-x-20 justify-center overflow-auto md:overflow-hidden" data-aos='fade-up'>
                {
                    categories.map((item, index) => {
                        return (
                            <motion.button
                                whileHover={{scale:1.1, fontWeight:'bold'}}
                                whileTap={{scale:0.9}}
                                key={index}
                                style={{
                                    borderBottom : isActive === item ? "2px solid black" : "",
                                    color : isActive === item ? "black" : "rgba(157, 23, 77, 0.8)"
                            }}
                                onClick={() => {setActive(item); setProducts(products[index])}}
                                className=' uppercase text-xs md:text-sm tracking-[0] sm:tracking-widest'>
                                {item}
                            </motion.button>
                        )
                    })
                }
            </div>
            <div className="items space-y-20 flex flex-col items-center">
                {
                    selecterProducts.map((item) => {
                        const animationType1 = item.id % 2 === 0 ? "fade-left" : "fade-right";
                        const animationType2 = item.id % 2 === 0 ? "fade-right" : "fade-left";
                        return (
                            <div key={item.id} className={`flex ${item.id % 2 !== 0 ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'} px-5 md:px-10 lg:px-10 lg:w-[80%] gap-x-20 h-auto`}>
                                <div
                                    data-aos={animationType1}
                                    className="item-img w-[100%] h-[400px]  md:h-[350px] flex justify-start md:justify-center">
                                    <img src={item.src} alt="" className='w-[100%] sm:w-[70%] md:w-[100%] h-full rounded-3xl shadow-2xl' />
                                </div>
                                <div
                                    data-aos={animationType2}
                                    className="item-content space-y-3 md:space-y-10 md:border-t-2 md:border-t-pink-800 py-5">
                                    <h1 className='item-name text-xl md:text-2xl text-pink-800'>{item.name}</h1>
                                    <p className='text-sm text-neutral-600 md:text-base'>{item.details}</p>
                                    <div className='space-y-3'>
                                        <h1 className='item-price text-pink-800 text-md'>$23.45 <span className='text-gray-500 font-sans text-xs px-3 line-through'>$45.23</span></h1>
                                        <button className='px-16 py-3 bg-pink-800 text-white text-xs rounded-sm active:scale-[0.97]'>Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

