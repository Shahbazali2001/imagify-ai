import React from 'react'
import { stepsData } from '../assets/assets'

const Steps = () => {
  return (
    <div className='flex flex-col items-center my-32'>
        <div>
            <h1 className='text-3xl sm:text-4xl font-semibold mb-2 text-center'>How it works</h1>
            <p className='text-lg text-gray-600 mb-8'>Transform words into stunning images in seconds</p>
        </div>

        <div>
            {stepsData.map((item, index) => (
                <div className='flex items-center gap-4 mb-10 border text-sm border-gray-300 py-10 pr-15 pl-5 rounded-2xl hover:scale-101 transition-all duration-400 sm:px-10' key={index}>
                    <img className='w-12' src={item.icon} alt="" />
                    <div>
                        <h2 className='text-lg font-semibold'>{item.title}</h2>
                        <p className='text-gray-600'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Steps