import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import womenwithcode from './assets/womenwithcode.svg'
import thoughwork from './assets/thoughwork.svg'
import ptc from './assets/ptc.svg'

function Story() {
    const [slideNum, setSlideNum] = useState(1)
    const totalSlide = ['Slide 1', 'Slide 2', 'Slide 3']

    const handleNextSlide = () => {
        setSlideNum((prevNum) => {
            return prevNum === totalSlide.length? 1: prevNum + 1;
        })
    }

    const handlePrevSlide = () => {
        setSlideNum((prevNum) => {
            return prevNum === 1? totalSlide.length: prevNum - 1;
        })
    }

    const handleDotClick = (num) => {
        setSlideNum(num)
    }

  return (
    <div className='story pt-10 pb-16'>
        <div className='set-width px-5'>
            <div className='justify-end items-center gap-x-6 hidden md4:flex my-5'>
                <div className='flex gap-x-3'>
                    <div className={`${slideNum===1 ? 'list-button-active': 'list-button-inactive'} list-button rounded-lg cursor-pointer grayBgHover`} onClick={()=>{handleDotClick(1)}}></div>
                    <div className={`${slideNum===2 ? 'list-button-active': 'list-button-inactive'} list-button rounded-lg cursor-pointer grayBgHover`} onClick={()=>{handleDotClick(2)}}></div>
                    <div className={`${slideNum===3 ? 'list-button-active': 'list-button-inactive'} list-button rounded-lg cursor-pointer grayBgHover`} onClick={()=>{handleDotClick(3)}}></div>
                </div>
                <div className='space-x-6'>
                    <FontAwesomeIcon icon={faChevronLeft} className='px-2 py-1.5 bg-gray-200 cursor-pointer text-gray-600 rounded-full blueHover' onClick={handlePrevSlide}/>
                    <FontAwesomeIcon icon={faChevronRight} className='px-2 py-1.5 bg-gray-200 cursor-pointer text-gray-600 rounded-full blueHover' onClick={handleNextSlide}/>
                </div>
            </div>

            <div className='overflow-hidden'>
                <div className='list-slider flex' style={{transform: `translateX(-${(slideNum-1) * 100}%)`}}>
                    <div className='drop-shadow-2xl md4:flex min-w-fit'>
                        <div className='storyPara px-8 py-8 rounded-t-xl md4:rounded-t-none md4:rounded-l-xl md4:flex md4:flex-col justify-between md4:py-10'>
                            <div>
                                <p className='text-2xl'>[Trello is] great for simplifying complex processes. As a manager, I can chunk [processes] down into bite-sized pieces for my team and then delegate that out, but still keep a bird's-eye view.</p>
                                <div className='h-0.5 w-36 bg-black my-4'></div>
                            </div>
                            <div>
                                <p className='text-lg'>Joey Rosenberg</p>
                                <p className='text-lg'>Global Leadership Director at Women Who Code</p>
                                <div className='md4:flex md4:justify-between md4:items-center'>
                                    <img className='my-4' src={womenwithcode} alt="img" />
                                    <a className='underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 md4:text-end' href="/">Read the story</a>
                                </div>
                            </div>
                        </div>
                        <div className='storyParaBottom text-white px-8 py-8 flex flex-col gap-y-4 rounded-b-xl md4:w-[90%] md4:gap-y-20 md4:rounded-r-xl md4:rounded-b-none'>
                            <p className='text-2xl font-semibold md3:text-4xl'>75% of organizations report that Trello delivers value to their business within 30 days.</p>
                            <a href="/" className='underline underline-offset-2 text-gray-100 decoration-gray-100 whiteHover'>Trello TechValidate Survey</a>
                        </div>
                    </div>

                    <div className='drop-shadow-2xl md4:flex min-w-fit'>
                        <div className='h-3/5 md4:h-auto storyPara px-8 py-8 rounded-t-xl md4:rounded-t-none md4:rounded-l-xl md4:flex md4:flex-col justify-between md4:py-10'>
                            <div>
                                <p className='text-2xl'>Whether someone is in the office, working from home, or working on-site with a client, everyone can share context and information through Trello.</p>
                                <div className='h-0.5 w-36 bg-black my-4'></div>
                            </div>
                            <div>
                                <p className='text-lg'>Sumeet Moghe</p>
                                <p className='text-lg'>Product Manager at ThoughtWorks</p>
                                <div className='md4:flex md4:justify-between md4:items-center'>
                                    <img className='my-4 w-[215px]' src={thoughwork} alt="img" />
                                    <a className='underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 md4:text-end' href="/">Read the story</a>
                                </div>
                            </div>
                        </div>
                        <div className='h-2/5 md4:h-auto storyParaBottom text-white px-8 py-8 flex flex-col gap-y-4 rounded-b-xl md4:w-[90%] md4:gap-y-20 md4:rounded-r-xl md4:rounded-b-none'>
                            <p className='text-2xl font-semibold md3:text-4xl'>81% of customers chose Trello for its ease of use.</p>
                            <a href="/" className='underline underline-offset-2 text-gray-100 decoration-gray-100 whiteHover'>Trello TechValidate Survey</a>
                        </div>
                    </div>

                    <div className='drop-shadow-2xl md4:flex min-w-fit'>
                        <div className='storyPara px-8 py-8 rounded-t-xl md4:rounded-t-none md4:rounded-l-xl md4:flex md4:flex-col justify-between md4:py-10'>
                            <div>
                                <p className='text-2xl'>We used Trello to provide clarity on steps, requirements, and procedures. This was exceptional when communicating with teams that had deep cultural and language differences.</p>
                                <div className='h-0.5 w-36 bg-black my-4'></div>
                            </div>
                            <div>
                                <p className='text-lg'>Jefferson Scomacao</p>
                                <p className='text-lg'>Development Manager at IKEA/PTC</p>
                                <div className='md4:flex md4:justify-between md4:items-center'>
                                    <img className='my-4 w-24' src={ptc} alt="img" />
                                    <a className='underline underline-offset-2 decoration-blue-700 text-lg text-blue-700 md4:text-end' href="/">Read the story</a>
                                </div>
                            </div>
                        </div>
                        <div className='storyParaBottom text-white px-8 py-8 flex flex-col gap-y-4 rounded-b-xl md4:w-[90%] md4:gap-y-20 md4:rounded-r-xl md4:rounded-b-none'>
                            <p className='text-2xl font-semibold md3:text-4xl'>74% of customers say Trello has improved communication with their co-workers and teams.</p>
                            <a href="/" className='underline underline-offset-2 text-gray-100 decoration-gray-100 whiteHover'>Trello TechValidate Survey</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mt-8 md4:hidden'>
                <div className='flex gap-x-3 mx-auto w-fit'>
                    <div className={`${slideNum===1 ? 'list-button-active': 'list-button-inactive'} list-button rounded-lg cursor-pointer grayBgHover`} onClick={()=>{handleDotClick(1)}}></div>
                    <div className={`${slideNum===2 ? 'list-button-active': 'list-button-inactive'} list-button rounded-lg cursor-pointer grayBgHover`} onClick={()=>{handleDotClick(2)}}></div>
                    <div className={`${slideNum===3 ? 'list-button-active': 'list-button-inactive'} list-button rounded-lg cursor-pointer grayBgHover`} onClick={()=>{handleDotClick(3)}}></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Story