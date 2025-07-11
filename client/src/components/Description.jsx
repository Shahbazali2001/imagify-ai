import React from 'react'
import { assets } from '../assets/assets'
import { motion as Motion } from "motion/react";

const Description = () => {
  return (
    
    <Motion.div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
        <div>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>Create Stunning AI Images</h1>
            <p className='text-lg text-gray-600 mb-8 text-center'>Turn your imagination into visuals</p>
        </div>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>
          
            <img className='w-80 xl:w-96 rounded-lg' src={assets.sample_img_1} alt="" />
           
            <div className=''>
                <h2 className='text-3xl font-medium max-w-lg mb-2 text-neutral-600'>Introducing the AI-Powered Text to Image Generator</h2>
                <p className='text-sm text-gray-600 mb-4 '>Easily bring your ideas to life with our free AI image generator. Whether you need stunning visuals or unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it, describe it, and watch it come to life instantly.</p>
                <p className='text-sm text-gray-600 mb-4 '>Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From product visuals to character designs and portraits, even concepts that don’t yet exist can be visualized effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!</p>
            </div>
        </div>

    </Motion.div>
  )
}

export default Description