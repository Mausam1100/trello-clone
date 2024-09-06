import React from 'react'
import discover1 from './assets/discover1.png'
import discover2 from './assets/discover2.png'

function Discover() {
  return (
    <div className='discover'>
        <div className='set-width px-5 space-y-10 py-14'>
            <div className='text-center space-y-4'>
                <h1 className='font-bold text-2xl md3:text-3xl text-white'>See work in a whole new way</h1>
                <p className='text-lg font-medium text-white'>View your team’s projects from every angle and bring a fresh perspective to the task at hand.</p>
                <a href="/" className='border rounded-md border-blue-700 px-5 py-3 bg-white inline-block mt-2 lightBgHover'>Discover all Trello views</a>
            </div>

            <div className='bg-white p-5 md3:px-9 md3:py-5 md4:py-14 rounded-lg flex flex-col md4:flex-row'>
                <img className='md4:w-[450px]' src={discover1} alt="" />
                <div className='space-y-5 mt-6 md4:pl-16'>
                    <h2 className='text-xl font-medium'> Hit deadlines every time</h2>
                    <p className='text-xl pb-5'>From weekly sprints to annual planning, Timeline view keeps all tasks on track. Quickly get a glimpse of what’s coming down the pipeline and identify any gaps that might impede your team’s progress.</p>
                    <a href="/" className='underline underline-offset-2 decoration-blue-700 text-xl text-blue-700 darkBlueHover'>Learn more about Timeline view</a>
                </div>
            </div>

            <div className='bg-white p-5 md3:px-9 md3:py-5 md4:py-14 rounded-lg flex flex-col md4:flex-row-reverse drop-shadow-2xl'>
                <img className='md4:w-[450px]' src={discover2} alt="" />
                <div className='space-y-5 mt-6 md4:pr-16 md4:pl-4'>
                    <h2 className='text-xl font-medium'>Stay on top of tasks</h2>
                    <p className='text-xl pb-5'>Start each day without any surprises. Whether scheduling an editorial calendar or staying on top of to-dos, Calendar view is like a crystal ball giving you a clear vision of what work lies ahead.</p>
                    <a href="/" className='underline underline-offset-2 decoration-blue-700 text-xl text-blue-700 darkBlueHover'>Learn more about Calendar view</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discover