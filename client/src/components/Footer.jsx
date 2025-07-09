import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 py-3 mt-20'>
        <div>
        <Link to="/">
          <img
            src={assets.logo}
            alt="Imagify Ai"
            className="w-28 sm:w-32 md:w-36 lg:w-40"
          />
        </Link>
      </div>
      <p className='text-sm border-1 border-gray-300 rounded-2xl px-8 py-1 text-gray-500 max-sm:hidden'>© 2025 Imagify Ai | All rights reserved</p>

      <div className='flex gap-2.5'>
        <img className='w-8' src={assets.facebook_icon} alt="" />
        <img className='w-8' src={assets.twitter_icon} alt="" />
        <img className='w-8' src={assets.instagram_icon} alt="" />
      </div>
    </div>
  )
}

export default Footer