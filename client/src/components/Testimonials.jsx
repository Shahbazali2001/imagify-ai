import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion as Motion } from "motion/react";

const Testimonials = () => {
  return (
    <Motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>Customer testimonials</h1>
            <p className='text-lg text-gray-600 mb-8 text-center'>What Our Users Are Saying</p>

            <div className='flex flex-row gap-6'>
                {testimonialsData.map((item, index) => (
                    <div className='border text-sm gap-4 border-gray-300 px-10 py-10 rounded-2xl transition-all hover:scale-101 duration-300 shadow-lg' key={index}>
                        <div className='flex flex-col items-center'>
                            <img className='rounded-full w-14' src={item.image} alt="" />
                            <h2 className='text-lg font-semibold'>{item.name}</h2>
                            <p className=''>{item.role}</p>
                            <div className='flex mb-4'>
                                {Array(item.stars).fill('').map((item, index) => (
                                    <img key={index} className='w-4' src={assets.rating_star} alt="" />
                                ))}
                            </div>
                            <p className=''>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
    </Motion.div>
    
  )
}

export default Testimonials