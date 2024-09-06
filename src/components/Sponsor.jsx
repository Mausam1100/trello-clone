import React from 'react'
import sponsor1 from './assets/sponsor1.svg'
import sponsor2 from './assets/sponsor2.svg'

function Sponsor() {
  return (
    <div className='py-16'>
        <div className='set-width text-center px-5 space-y-7'>
            <p className='text-xl'>Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
            <img className='mx-auto md3:hidden' src={sponsor1} alt="img" />
            <img className='mx-auto hidden md3:inline-block' src={sponsor2} alt="img" />
        </div>
    </div>
  )
}

export default Sponsor