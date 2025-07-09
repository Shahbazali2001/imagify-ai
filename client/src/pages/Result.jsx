import React from 'react'
import { assets } from '../assets/assets'

const Result = () => {
  return (
    <div>
      <div className='relative'>
          <img src={assets.sample_img_1} className="max-w-sm rounded" alt="" />
          <span className='absolute bottom-0 left-0 h-1 bg-blue-500 w-full transition-all duration-[10s]'>

          </span>
      </div>
      <p>Loading...</p>
    </div>
  )
}

export default Result 