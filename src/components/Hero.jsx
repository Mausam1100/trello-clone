import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'
import hero from './assets/hero.webp'

function Hero() {
  return (
    <div className='relative hero mb-8'>
      <div className='set-width'>
        <div className='px-5 pt-32 text-center md4:text-start flex flex-wrap gap-y-9 md4:flex-nowrap'>
          <div className='text-white flex flex-col gap-y-5 h-fit md4:w-2/4'>
            <h1 className='font-semibold text-3xl md3:text-5xl'>Trello brings all your tasks, teammates, and tools together</h1>
            <p className='text-xl'>Keep everything in the same place—even if your team isn’t.</p>
            <div className='h-full flex items-center justify-center gap-4 flex-wrap md4:justify-start'>
              <input type="text" placeholder='Email' id='email' className='hidden text-black md3:inline-block rounded-md w px-4 h-[50px] w-[280px]' />
              <button className='bg-blue-600 px-4 py-3 rounded-md text-lg h-full md3:font-medium md3:px-5 darkBlueBgHover2'>Sign in-it's free!</button>
            </div>
            <a href="/" className='underline text-gray-300 underline-offset-2 whiteHover2'>Watch video <FontAwesomeIcon className='playlogo' icon={faCirclePlay} size='lg'/></a>
          </div>

          <div className='z-10 relative md4:w-2/4'>
            <img src={hero} alt="img" />
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1725015801">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Hero