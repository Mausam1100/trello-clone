import React, { useState } from 'react'
import list1 from './assets/list1.png'
import list2 from './assets/list2.png'
import list3 from './assets/list3.png'

function List() {
    const [activeList, setActiveList] = useState(1)

    const handleListClick = (num) => {
        setActiveList(num)
    }

    const isActive = (num) => num === activeList? 'list-active': 'list-inactive'

  return (
    <div className='pb-20 list'>
        <div className=' set-width px-5 flex flex-col gap-y-10'>
            <div className='tracking-wide space-y-2.5'>
                <h2 className='font-medium'>TRELLO 101</h2>
                <h1 className='font-medium text-xl md3:text-3xl'>A productivity powerhouse</h1>
                <p className='text-lg'>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our <a href="/" className='underline underline-offset-2 text-blue-700'>guide for getting started.</a></p>
            </div>
            
            <div className='flex flex-col gap-y-6 gap-x-8 md4:flex-row-reverse'>  
                <div className='w-fit overflow-hidden'>
                    <div className='image-slider flex w-full' style={{transform: `translateX(-${(activeList - 1) * 100}%)`}}>
                        <img src={list1} alt="img" className='w-full'/>
                        <img src={list2} alt="img" className='w-full'/>
                        <img src={list3} alt="img" className='w-full'/>
                    </div>
                </div>
                
                <div className='md4:w-[50%] overflow-hidden'>
                    <div className={`md4:hidden list-slider flex w-full space-y-5 translate-x-[(-${(activeList - 1) * 100}%)]`} style={{transform: `translateX(-${(activeList - 1) * 100}%)`}}>
                        <div className={`list-active cursor-pointer min-w-full px-5 py-4 md4:w-[100%] md4:h-fit`} onClick={() => handleListClick(1)}>
                            <h2 className='font-medium'>Lists</h2>
                            <p>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                        </div>

                        <div className={`list-active md4:inline-block min-w-full cursor-pointer px-5 py-4 md4:w-[100%] md4:h-fit`} onClick={() => handleListClick(2)}>
                            <h2 className='font-medium'>Boards</h2>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                        </div>

                        <div className={`list-active md4:inline-block min-w-full px-5 cursor-pointer py-4 md4:w-[100%] md4:h-fit`} onClick={() => handleListClick(3)}>
                            <h2 className='font-medium'>Cards</h2>
                            <p>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                        </div>
                    </div>


                    <div className='hidden md4:inline-block w-[100%] space-y-5'>
                        <div className={`${isActive(1)} cursor-pointer px-5 py-4 md4:w-[100%] md4:h-fit`} onClick={() => handleListClick(1)}>
                            <h2 className='font-medium'>Lists</h2>
                            <p>The different stages of a task. Start as simple as To Do, Doing or Done—or build a workflow custom fit to your team’s needs. There’s no wrong way to Trello.</p>
                        </div>

                        <div className={`${isActive(2)} hidden md4:inline-block cursor-pointer px-5 py-4 md4:w-[100%] md4:h-fit`} onClick={() => handleListClick(2)}>
                            <h2 className='font-medium'>Boards</h2>
                            <p>Trello boards keep tasks organized and work moving forward. In a glance, see everything from “things to do” to “aww yeah, we did it!”</p>
                        </div>

                        <div className={`${isActive(3)} hidden md4:inline-block px-5 cursor-pointer py-4 md4:w-[100%] md4:h-fit`} onClick={() => handleListClick(3)}>
                            <h2 className='font-medium'>Cards</h2>
                            <p>Cards represent tasks and ideas and hold all the information to get the job done. As you make progress, move cards across lists to show their status.</p>
                        </div>
                    </div>
                </div>
                
                <div className='mx-auto flex gap-x-3 md4:hidden'>
                    <div className={`list-button ${isActive(1)==='list-active'? 'list-button-active': 'list-button-inactive'} rounded-lg cursor-pointer grayBgHover`} onClick={()=> handleListClick(1)}></div>
                    <div className={`list-button ${isActive(2)==='list-active'? 'list-button-active': 'list-button-inactive'}  rounded-lg cursor-pointer grayBgHover`} onClick={()=> handleListClick(2)}></div>
                    <div className={`list-button ${isActive(3)==='list-active'? 'list-button-active': 'list-button-inactive'}  rounded-lg cursor-pointer grayBgHover`} onClick={()=> handleListClick(3)}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default List