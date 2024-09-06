import React, { useState } from 'react'
import workflow1 from './assets/workflow1.png'
import workflow2 from './assets/workflow2.png'
import workflow3 from './assets/workflow3.png'
import workflow4 from './assets/workflow4.png'
import workflow5 from './assets/workflow5.svg'
import workflow6 from './assets/workflow6.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

function WorkFlow() {
  const [workflowTranslate, setWorkflowTranslate] = useState(1)

  const handleArrowClick = (num) => {
    setWorkflowTranslate(num)
  }

  return (
    <div className='bg-white overflow-hidden'>
        <div className='set-width px-4 space-y-10 md3:space-y-14 py-11 md3:py-14'>
            <div className='tracking-wide space-y-2.5'>
                <h2 className='font-medium'>TRELLO IN ACTION</h2>
                <h1 className='font-medium text-xl md3:text-3xl'>Workflows for any project, big or small</h1>
            </div>

            <div className='text-end space-x-4 -m-2 hidden md4:block'>
              <FontAwesomeIcon icon={faChevronLeft} className='px-2 py-1.5 bg-gray-200 cursor-pointer text-gray-600 rounded-full blueHover' onClick={() => {handleArrowClick(1)}}/>
              <FontAwesomeIcon icon={faChevronRight} className='px-2 py-1.5 bg-gray-200 cursor-pointer text-gray-600 rounded-full blueHover' onClick={() => {handleArrowClick(2)}}/>
            </div>

            <div className='overflow-x-scroll md4:overflow-x-visible'>
              <div className='translateWorkflow flex gap-x-7' style={{transform: `translateX(-${(workflowTranslate - 1) * 100}%)`}}>
                <a href='/' className='hover:drop-shadow-2xl min-w-[84%] md4:min-w-[18rem] md5:min-w-[22rem] h-[16rem] bg-white rounded-lg drop-shadow-xl'>
                  <div className='workdone1 h-[15%] md2:h-[21%] rounded-t-lg'></div>
                  <div className='px-6'>
                    <div className='w-12 h-10 place-items-center grid rounded-md bg-white relative -top-6'>
                      <img className='w-7' src={workflow1} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Project Management</h2>
                    <p className='pt-2'>Keep task in order, dealines on track, and team members aligned with Trello.</p>
                  </div>
                </a>

                <a href='/' className='hover:drop-shadow-2xl min-w-[84%] md4:min-w-[18rem] md5:min-w-[22rem] h-[16rem] bg-white rounded-lg drop-shadow-xl'>
                  <div className='workdone2 h-[15%] md2:h-[21%] rounded-t-lg'></div>
                  <div className='px-6'>
                    <div className='w-12 h-10 place-items-center grid rounded-md bg-white relative -top-6'>
                      <img className='w-7' src={workflow2} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Meetings</h2>
                    <p className='pt-2'>Empower your team meetings to be more productive, empowering, and dare we say—fun.</p>
                  </div>
                </a>

                <a href='/' className='hover:drop-shadow-2xl min-w-[84%] md4:min-w-[18rem] md5:min-w-[22rem] h-[16rem] bg-white rounded-lg drop-shadow-xl'>
                  <div className='workdone3 h-[15%] md2:h-[21%] rounded-t-lg'></div>
                  <div className='px-6'>
                    <div className='w-12 h-10 place-items-center grid rounded-md bg-white relative -top-6'>
                      <img className='w-7' src={workflow3} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Onboarding</h2>
                    <p className='pt-2'>Onboarding to a new company or project is a snap with Trello’s visual layout of to-do’s, resources, and progress tracking.</p>
                  </div>
                </a>

                <a href='/' className='hover:drop-shadow-2xl min-w-[84%] md4:min-w-[18rem] md5:min-w-[22rem] h-[16rem] bg-white rounded-lg drop-shadow-xl'>
                  <div className='workdone4 h-[15%] md2:h-[21%] rounded-t-lg'></div>
                  <div className='px-6'>
                    <div className='w-12 h-10 place-items-center grid rounded-md bg-white relative -top-6'>
                      <img className='w-7' src={workflow4} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Task management</h2>
                    <p className='pt-2'>Use Trello to track, manage, complete, and bring tasks together like the pieces of a puzzle, and make your team’s projects a cohesive success every time.</p>
                  </div>
                </a>

                <a href='/' className='hover:drop-shadow-2xl min-w-[84%] md4:min-w-[18rem] md5:min-w-[22rem] h-[16rem] bg-white rounded-lg drop-shadow-xl'>
                  <div className='workdone5 h-[15%] md2:h-[21%] rounded-t-lg'></div>
                  <div className='px-6'>
                    <div className='w-12 h-10 place-items-center grid rounded-md bg-white relative -top-6'>
                      <img className='w-7' src={workflow5} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Brainstormin</h2>
                    <p className='pt-2'>Unleash your team’s creativity and keep ideas visible, collaborative, and actionable.</p>
                  </div>
                </a>

                <a href='/' className='hover:drop-shadow-2xl min-w-[84%] md4:min-w-[18rem] md5:min-w-[22rem] h-[16rem] bg-white rounded-lg drop-shadow-xl'>
                  <div className='workdone6 h-[15%] md2:h-[21%] rounded-t-lg'></div>
                  <div className='px-6'>
                    <div className='w-12 h-10 place-items-center grid rounded-md bg-white relative -top-6'>
                      <img className='w-7' src={workflow6} alt="" />
                    </div>
                    <h2 className='text-xl font-semibold'>Resource hub</h2>
                    <p className='pt-2'>Save time with a well-designed hub that helps teams find information easily and quickly.</p>
                  </div>
                </a>
              </div>
            </div>

            <div className='flex flex-col md4:flex-row gap-y-8 md4:justify-between'>
              <p className='text-xl font-medium md4:w-[690px] md5:w-[740px]'>No need to start from scratch. Jump-start your workflow with a proven playbook designed for different teams. Customize it to make it yours.</p>
              <a href="/" className='w-fit inline-block border rounded-md border-blue-700 px-5 py-3 lightBgHover'>Explore all Use Cases</a>
            </div>
        </div>
    </div>
  )
}

export default WorkFlow