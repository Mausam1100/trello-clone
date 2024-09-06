import React from 'react'

function Price() {
  return (
    <div className='price'>
        <div className='set-width px-5 py-3 md3:py-6'>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl font-semibold md3:text-3xl'>Trello priced your way</h1>
                <p className='text-xl md3:text-2xl pb-2'>Trusted by millions, Trello powers teams all around the world.</p>
                <a className='text-white bg-blue-600 text-lg px-4 py-2 inline-block rounded-md font-medium darkBlueBgHover2' href="/">Compare plans</a>
            </div>

            <div className='mt-9 md3:mt-16 flex flex-col gap-y-4 md4:flex-row'>
                <div className='md4:w-[25%] package bg-white border-2 border-gray-100 flex flex-col justify-between px-4 py-5'>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>FREE</h3>
                        <div>
                            <h3 className='text-lg font-medium mb-2'>$<span className='text-5xl'>0</span>USD</h3>
                            <p className='text-sm text-gray-400'>Free for your whole team</p>
                        </div>
                        <p className='text-lg'>For individuals or teams looking to organize any project.</p>
                    </div>
                    <div className='space-y-4'>
                        <a href="/" className='inline-block border rounded-md border-blue-400 px-5 py-2 mt-6 priceBtnHover'>Get started</a>
                        <a href="/" className='invisible underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 block'>Learn more about Standard</a>
                    </div>
                </div>

                <div className='md4:w-[25%] package bg-white border-2 border-gray-100 flex flex-col justify-between px-4 py-5'>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Standard</h3>
                        <div>
                            <h3 className='text-lg font-medium mb-2'>$<span className='text-5xl'>5</span>USD</h3>
                            <p className='text-sm text-gray-400'>Per user/month if billed annually ($6 billed monthly)</p>
                        </div>
                        <p className='text-lg'>For small teams that need to manage work and scale collaboration.</p>
                    </div>
                    <div className='space-y-4'>
                        <a href="/" className='inline-block border rounded-md border-blue-400 px-5 py-2 mt-6 priceBtnHover'>Sign up now</a>
                        <a href="/" className='underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 block darkBlueHover'>Learn more about Standard</a>
                    </div>
                </div>

                <div className='md4:w-[25%] package bg-white premium flex flex-col justify-between px-4 py-5'>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Premium</h3>
                        <div>
                            <h3 className='text-lg font-medium mb-2'>$<span className='text-5xl'>10</span>USD</h3>
                            <p className='text-sm text-gray-400'>Per user/month if billed annually ($12.50 billed monthly)</p>
                        </div>
                        <p className='text-lg'>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
                    </div>
                    <div className='space-y-4'>
                        <a href="/" className='inline-block border rounded-md border-blue-400 px-5 py-2 mt-6 premium-btn priceBtnHover hover:bg-white'>Try For Free</a>
                        <a href="/" className='underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 block darkBlueHover'>Learn more about Premium</a>
                    </div>
                </div>

                <div className='md4:w-[25%] package bg-white border-2 border-gray-100 flex flex-col justify-between px-4 py-5'>
                    <div className='space-y-4'>
                        <h3 className='text-lg font-medium'>Enterprise</h3>
                        <div>
                            <h3 className='text-lg font-medium mb-2'>$<span className='text-5xl'>17.50</span>USD</h3>
                            <p className='text-sm text-gray-400'>Per user/month - billed annually ($210.00 annual price per user)</p>
                        </div>
                        <p className='text-lg'>For organizations that need to connect work across teams with more security and controls.</p>
                        <p>Est. cost for<span className='underline underline-offset-8 decoration-black text-xl font-medium'> 50 </span>users</p>
                    </div>
                    <div className='space-y-4'>
                        <a href="/" className='inline-block border rounded-md border-blue-400 px-5 py-2 mt-6 priceBtnHover'>Contact sales</a>
                        <a href="/" className='underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 block darkBlueHover'>Learn more about Enterprise</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Price