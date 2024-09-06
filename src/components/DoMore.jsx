import React from 'react'
import domore1 from './assets/domore1.svg'
import domore2 from './assets/domore2.svg'
import domore3 from './assets/domore3.svg'

function DoMore() {
  return (
    <div>
        <div className='set-width px-5 space-y-8 py-14'>
            <div>
                <h2 className='text-xl'>Powerful ways to grow</h2>
                <h1 className='text-xl font-medium md3:text-3xl'>Do more with Trello</h1>
                <p className='text-lg md3:text-xl'>Trello’s intuitive features give any team the ability to quickly set up and customize workflows for just about anything.</p>
            </div>

            <div className='flex flex-col md3:flex-row md3:flex-wrap gap-x-8 gap-y-9 md3:justify-center md4:w-fit md4:flex-nowrap'>
                <div className={`bg-gray-50 p-5 rounded-lg md3:w-[47.5%]`}>
                    <img src={domore1} alt="" />
                    <div className='space-y-3'>
                        <h2 className='font-medium md3:text-xl'>Integrations</h2>
                        <p className='pb-3'>Connect the apps your team already uses into your Trello workflow or add a Power-Up to fine-tune your specific needs.</p>
                        <a href="/" className='inline-block border rounded-md border-blue-700 px-5 py-2 lightBgHover'>Browse Integrations</a>
                    </div>
                </div>

                <div className='bg-slate-50 p-5 rounded-lg md3:w-[47.5%]'>
                    <img src={domore2} alt="" />
                    <div className='space-y-3'>
                        <h2 className='font-medium md3:text-xl'>Butler Automation</h2>
                        <p className='pb-3'>No-code automation is built into every Trello board. Focus on the work that matters most and let the robots do the rest.</p>
                        <a href="/" className='inline-block border rounded-md border-blue-700 px-5 py-2 lightBgHover'>Get to know Automation</a>
                    </div>
                </div>

                <div className='bg-slate-50 p-5 rounded-lg md3:w-[47.5%]'>
                    <img src={domore3} alt="" />
                    <div className='space-y-3'>
                        <h2 className='font-medium md3:text-xl'>Trello Enterprise</h2>
                        <p className='pb-3'>The productivity tool teams love, paired with the features and security needed for scale.</p>
                        <a href="/" className='inline-block border rounded-md border-blue-700 px-5 py-2 lightBgHover'>Explore Enterprise</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoMore