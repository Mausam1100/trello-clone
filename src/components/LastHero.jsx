import React from 'react'

function LastHero() {
  return (
    <div className='lastHero relative'>
        <div className='set-width px-5 text-white flex flex-col items-center gap-y-5 py-12 md4:py-20'>
            <h2 className='text-2xl md3:text-3xl md3:font-semibold text-center font-medium'>Get started with Trello today</h2>
            <div className='flex justify-center gap-x-4 w-full'>
                <input className='hidden text-black md3:inline-block rounded-md px-3 w-[300px]' placeholder='Email' type="text" />
                <button className='bg-blue-600 text-lg px-4 py-2.5 inline-block rounded-md w-full md3:w-auto darkBlueBgHover2'>Sign up-it's free!</button>
            </div>
        </div>
    </div>
  )
}

export default LastHero