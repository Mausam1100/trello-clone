import React from 'react'
import earth from './assets/last1.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedinIn, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons';
function Last() {
  return (
    <div className='footer'>
        <div className='set-width px-8 text-white md4:flex md4:items-center md4:justify-between'>
            <div className='flex flex-col gap-y-3 md4:gap-x-6 md4:flex-row md4:items-center'>
                <div className='flex py-5 gap-x-3'>
                    <img className='w-5' src={earth} alt="img" />
                    <select className='font-medium bg-transparent cursor-pointer' name="lang" id="lang">
                        <option value="0">English</option>
                        <option value="0">French</option>
                        <option value="0">Chinese</option>
                    </select>
                </div>
                <a href="/" className='text-xs md4:font-medium hover:underline hover:underline-offset-2 hover:decoration-white'>Privacy Policy</a>
                <a href="/" className='text-xs md4:font-medium hover:underline hover:underline-offset-2 hover:decoration-white'> Terms</a>
                <p className='text-xs md4:font-medium'>Copyright © 2024 Atlassian</p>
            </div>

            <div className='flex flex-wrap gap-x-8 gap-y-8 py-16 md4:py-6 md4:gap-x-5 md5:gap-x-8'>
                <a href="/" className='border-2 border-white rounded-full flex justify-center items-center '><FontAwesomeIcon className='p-1 hover:scale-75 last-logo' icon={faInstagram} size='sm'/></a>
                <a href="/" className='border-2 border-white rounded-full flex justify-center items-center '><FontAwesomeIcon className='p-1 hover:scale-75 last-logo' icon={faFacebook} size='sm'/></a>
                <a href="/" className='border-2 border-white rounded-full flex justify-center items-center '><FontAwesomeIcon className='p-1 hover:scale-75 last-logo' icon={faLinkedinIn} size='sm'/></a>
                <a href="/" className='border-2 border-white rounded-full flex justify-center items-center '><FontAwesomeIcon className='p-1 hover:scale-75 last-logo' icon={faTwitter} size='sm'/></a>
                <a href="/" className='border-2 border-white rounded-full flex justify-center items-center '><FontAwesomeIcon className='p-1 hover:scale-75 last-logo' icon={faYoutube} size='sm'/></a>
            </div>
        </div>  
    </div>
  )
}

export default Last