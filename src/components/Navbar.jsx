import React from 'react'
import logo1 from './logo1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faAngleDown } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
  return (
    <div className='bg-white h-16 md1:h-[60px] sticky z-20 top-0 drop-shadow-md'>
        <div className='pl-4 mx-auto max-w-[1320px] flex items-center justify-between h-full'>
            <div className='flex items-center'>
                <a href="/"><img src={logo1} alt="logo" /></a>
                <ul className='md1:flex items-center text-lg ml-8 gap-x-6 hidden'>
                    <li className='cursor-pointer blueHover'>Features <FontAwesomeIcon icon={faAngleDown} size='xs' /></li>
                    <li className='cursor-pointer blueHover'>Solutions <FontAwesomeIcon icon={faAngleDown} size='xs' /></li>
                    <li className='cursor-pointer blueHover'>Plans <FontAwesomeIcon icon={faAngleDown} size='xs' /></li>
                    <li className='blueHover'><a href="/">Pricing</a></li>
                    <li className='cursor-pointer blueHover'>Resources <FontAwesomeIcon icon={faAngleDown} size='xs' /></li>
                </ul>
            </div>
            <div className='flex pr-4 md1:pr-0 h-full items-center'>
                <FontAwesomeIcon className='md1:hidden' icon={faBars} size='xl'/>
                <div className='hidden md1:flex items-center justify-center text-lg font-medium px-7'><a href="/">Log in</a></div>
                <div className='hidden md1:flex text-white bg-blue-600 h-full items-center justify-center px-8 text-lg font-medium darkBlueBgHover'><a href="/">Gel Trello for free</a></div>
            </div>
        </div>
    </div>
  )
}

export default Navbar