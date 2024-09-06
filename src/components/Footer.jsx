import React from 'react'
import logo from './assets/footerlogo.svg'

function Footer() {
  return (
    <div className='footer'>
        <div className='set-width px-8 text-white flex flex-col md4:flex-row md4:gap-x-[28px] md4:bottom-border'>
            <div className='flex justify-between items-center bottom-border py-9 md4:py-7 md4:border-none md4:flex-col md4:items-start md4:justify-between md4:w-[18%] gap-y-3'>
                <img className='w-[125px]' src={logo} alt="img" />
                <button className='font-medium hover:underline hover:underline-offset-2 hover:decoration-white'>Log In</button>
            </div>
                
            <a href='/' className='bottom-border py-5 md4:py-7 space-y-2 md4:border-none md4:w-[20%]'>
                <h3 className='font-medium'>About Trello</h3>
                <p className='text-xs w-[70%] md2:w-[60%] md4:w-[100%]'>What’s behind the boards.</p>
            </a>
                
            <a href='/' className='bottom-border py-5 md4:py-7 space-y-2 md4:border-none md4:w-[20%]'>
                <h3 className='font-medium'>Jobs</h3>
                <p className='text-xs w-[70%] md2:w-[60%] md4:w-[100%]'>Learn about open roles on the Trello team.</p>
            </a>
                
            <a href='/' className='bottom-border py-5 md4:py-7 space-y-2 md4:border-none md4:w-[20%]'>
                <h3 className='font-medium'>Apps</h3>
                <p className='text-xs w-[70%] md2:w-[60%] md4:w-[100%]'>Download the Trello App for your Desktop or Mobile devices.</p>
            </a>

            <a href='/' className='bottom-border py-5 md4:py-7 space-y-2 md4:border-none md4:w-[20%]'>
                <h3 className='font-medium'>Contact us</h3>
                <p className='text-xs w-[70%] md2:w-[60%] md4:w-[100%]'>Need anything? Get in touch and we can help.</p>
            </a>

        </div>
    </div>
  )
}

export default Footer