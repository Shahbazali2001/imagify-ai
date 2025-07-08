import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center my-20'>
        <div className='inline-flex text-center gap-2 text-stone-500 bg-white px-6 py-1 rounded-full border border-neutral-500 '>
            <p>Best text to image generator ever</p> 
            <img src={assets.star_icon} alt="" />
        </div>

        <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>
            Turn text to <span className='text-blue-600'>image</span>, in seconds.
        </h1>

        <p className='text-center max-w-xl mx-auto mt-5 text-stone-500'>Unleash your creativity with AI. Turn your imagination into visual art in seconds - just type, and watch the magic happen.</p>
        
        <button className='flex items-center gap-2 sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 rounded-full cursor-pointer'>
            Generate Now
            <img className='h-6' src={assets.star_group} alt="" />
        </button>

        {/* Images */}
        <div className='flex flex-wrap justify-center gap-2 mt-15'>
            {Array(6).fill('').map(
                (item, index) => (
                    <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' key={index} width={70} 
                    src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} alt="" />
                )
            )}
            
        </div>
        <p className='text-sm text-neutral-600 mt-2'>Generated images by Imagify</p>
    </div>
  )
}

export default Header