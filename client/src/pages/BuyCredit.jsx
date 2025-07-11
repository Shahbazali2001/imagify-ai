import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import AppContext from '../context/AppContext'
import { motion as Motion } from "motion/react";

const BuyCredit = () => {

  const { user } = useContext(AppContext);

  return (
    <Motion.div 
    initial={{ opacity: 0, y: 100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className='min-h-[80vh] text-center pt-14 mb-10'>

      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>Our Plans</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>

      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans.map((item, index) => (
          <div className='flex flex-col bg-white drop-shadow border border-gray-200 rounded-md py-12 px-8 text-gray-600 hover:scale-101 transition-all duration-500' key={index}>
              <img width={40} src={assets.logo_icon} alt="" />
              <p className='mt-4 mb-1 text-black font-semibold'>{item.id}</p>
              <p className='text-sm'>{item.desc}</p>
              <p className='mt-6 '>
                <span className='text-3xl font-medium'>${item.price}</span>/ {item.credits} credits  
              </p>
              <button className='w-full bg-black text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>
                {user ? "Buy Now" : "Get Started"}
              </button>
          </div>
        ))}
      </div>

    </Motion.div>
  )
}

export default BuyCredit